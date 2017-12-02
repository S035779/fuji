namespace java shared
namespace php shared
namespace js shared

struct SharedStruct {
  1: i32 key,
  2: string value
}

service SharedService {
  SharedStruct getStruct( 1: i32 key )
}
