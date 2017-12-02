namespace java com.s035779.fuji.item
namespace php Fuji.Item
namespace js Fuji.Item

struct Item {
  1: i64 Rank,
  2: string ASIN,
  3: string Title,
  4: string Release,
  5: string ItemUrl,
  6: string ImageUrl,
  7: i64 ListPrice,
  8: i64 LowestNewPrice,
  9: i64 LowestUsedPrice,
  10: i64 OfferPrice,
}

struct Tops {
  1: string ASIN,
  2: string Title,
  3: string ItemUrl,
  4: string Category,
}

struct Node {
  1: i64 BrowseNode,
  2: string Name,
}

service ItemService
{
  list<Tops> NewReleases(1:i64 node_id),
  list<Tops> BestSellers(1:i64 node_id),
  list<Item> ReleaseDate(1:i64 node_id, 2:string category, 3:i64 page),
  list<Item> SalesRanking(1:i64 node_id, 2:string category, 3:i64 page),
  list<Item> ItemLookup(1:string item_id, 2:string id_type),
  list<Item> ItemList(1:string keyword, 2:i64 page),
  list<Node> NodeList(1:i64 node_id),
}
