"""顺着 cursor 把页面拉完，并给页数一个上限。"""

from __future__ import annotations


def fetch_all(fetch_page, limit_pages: int = 20) -> list:
    items = []
    cursor = None
    pages = 0
    while True:
        page_items, cursor = fetch_page(cursor)
        items.extend(page_items)
        pages += 1
        if not cursor:
            return items
        if pages >= limit_pages:
            raise RuntimeError("分页超过上限，停下来检查 cursor 是否在前进")


def main() -> int:
    catalog = {
        None: (["api", "worker"], "p2"),
        "p2": (["cron"], None),
    }

    def fetch_page(cursor):
        return catalog[cursor]

    names = fetch_all(fetch_page)
    print(" ".join(names))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
