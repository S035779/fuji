namespace php Fuji.Entry
namespace js Fuji.Entry

include "fuji.item.thrift"

enum EntryType {
  TEXT = 1,
  PHOTO = 2,
}

struct Entry {
  1: i64 id,
  2: optional fuji.item.Item title,
  3: EntryType entryType,
  4: string text,
  5: optional string photoUrl,
}

exception InvalidLanguageException {}

service EntryService
{
  list<Entry> findByItemDetails(
    1: string language,
    2: i64 page,
    3: i64 perPage,
  ) throws (
    1: InvalidLanguageException ex
  ),
}
