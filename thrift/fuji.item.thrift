namespace php Fuji.Item
namespace js Fuji.Item

const string LANGUAGE_JA = "JA";
const string LANGUAGE_EN = "EN";

struct Item {
  1: i64 id,
  2: string name,
  3: optional string language,
  4: optional string iconUrl,
}

struct ItemOption {
  1: optional bool withLanguage = false,
  2: optional bool withIcon = false,
}

service ItemService
{
  void ping(),
  oneway void zip(),
  i64 add(
    1:i64 num1, 
    2:i64 num2
  ),
  Item findById(
    1:i64 id 
  ),
  list<Item> findByIds(
    1:list<i64> ids,
    2:ItemOption opt,
  ),
}
