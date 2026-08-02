type SortOrder = "asc" | "desc";

interface ListState {
  page: number;
  sort: SortOrder;
}

export function initPostListControls(): void {
  const pageData = document.getElementById("page-data");
  const list = document.getElementById("post-list");
  const pagination = document.getElementById("pagination");
  const sortButton = document.getElementById("sort-btn") as HTMLButtonElement | null;

  if (!pageData || !list || !pagination) return;

  const parsedPageSize = Number.parseInt(pageData.dataset.pageSize ?? "", 10);
  const pageSize = Number.isFinite(parsedPageSize) && parsedPageSize > 0
    ? parsedPageSize
    : 10;
  const totalPages = Math.max(
    1,
    Math.ceil(list.querySelectorAll(".post-item").length / pageSize),
  );

  function readState(): ListState {
    const params = new URLSearchParams(window.location.search);
    const requestedPage = Number.parseInt(params.get("page") ?? "1", 10);
    const page = Math.min(
      totalPages,
      Math.max(1, Number.isFinite(requestedPage) ? requestedPage : 1),
    );
    return {
      page,
      sort: params.get("sort") === "asc" ? "asc" : "desc",
    };
  }

  function stateUrl({ page, sort }: ListState): string {
    const params = new URLSearchParams();
    if (page > 1) params.set("page", String(page));
    if (sort === "asc") params.set("sort", sort);
    const query = params.toString();
    return query
      ? `${window.location.pathname}?${query}`
      : window.location.pathname;
  }

  function sortItems(sort: SortOrder): void {
    const items = Array.from(
      list!.querySelectorAll<HTMLElement>(".post-item"),
    );
    items.sort((a, b) => {
      const first = a.dataset.date ?? "";
      const second = b.dataset.date ?? "";
      return sort === "asc"
        ? first.localeCompare(second)
        : second.localeCompare(first);
    });
    items.forEach((item) => list!.appendChild(item));
  }

  function showPage(page: number): void {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    list!
      .querySelectorAll<HTMLElement>(".post-item")
      .forEach((item, index) => {
        item.classList.toggle("hidden", index < start || index >= end);
      });
  }

  function paginationModel(page: number): Array<number | "ellipsis"> {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    const pages: Array<number | "ellipsis"> = [1];
    if (page > 3) pages.push("ellipsis");
    for (
      let current = Math.max(2, page - 1);
      current <= Math.min(totalPages - 1, page + 1);
      current += 1
    ) {
      pages.push(current);
    }
    if (page < totalPages - 2) pages.push("ellipsis");
    pages.push(totalPages);
    return pages;
  }

  function renderPagination(state: ListState): void {
    pagination!.replaceChildren();
    if (totalPages <= 1) return;

    const addLink = (
      label: string,
      targetPage: number,
      options: { current?: boolean; disabled?: boolean; label?: string } = {},
    ) => {
      const link = document.createElement("a");
      const targetState = { ...state, page: targetPage };
      link.href = stateUrl(targetState);
      link.className = "page-btn";
      link.textContent = label;
      link.dataset.page = String(targetPage);
      if (options.label) link.setAttribute("aria-label", options.label);
      if (options.current) {
        link.classList.add("active");
        link.setAttribute("aria-current", "page");
      }
      if (options.disabled) {
        link.classList.add("disabled");
        link.setAttribute("aria-disabled", "true");
        link.tabIndex = -1;
      }
      link.addEventListener("click", (event) => {
        event.preventDefault();
        if (options.disabled) return;
        navigate(targetState);
      });
      pagination!.appendChild(link);
    };

    addLink("←", Math.max(1, state.page - 1), {
      disabled: state.page === 1,
      label: "上一页",
    });

    paginationModel(state.page).forEach((entry) => {
      if (entry === "ellipsis") {
        const ellipsis = document.createElement("span");
        ellipsis.className = "page-ellipsis";
        ellipsis.textContent = "…";
        ellipsis.setAttribute("aria-hidden", "true");
        pagination!.appendChild(ellipsis);
      } else {
        addLink(String(entry), entry, { current: entry === state.page });
      }
    });

    addLink("→", Math.min(totalPages, state.page + 1), {
      disabled: state.page === totalPages,
      label: "下一页",
    });
  }

  function updateSortButton(sort: SortOrder): void {
    if (!sortButton) return;
    const label = document.getElementById("sort-label");
    if (label) label.textContent = sort === "asc" ? "最早在前" : "最新在前";
    sortButton.setAttribute(
      "aria-label",
      sort === "asc" ? "切换为最新文章在前" : "切换为最早文章在前",
    );
    sortButton.setAttribute("aria-pressed", String(sort === "asc"));
  }

  function render(state: ListState): void {
    sortItems(state.sort);
    showPage(state.page);
    renderPagination(state);
    updateSortButton(state.sort);
  }

  function navigate(state: ListState): void {
    window.history.pushState(state, "", stateUrl(state));
    render(state);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  sortButton?.addEventListener("click", () => {
    const current = readState();
    navigate({
      page: 1,
      sort: current.sort === "desc" ? "asc" : "desc",
    });
  });

  window.addEventListener("popstate", () => render(readState()));
  render(readState());
}
