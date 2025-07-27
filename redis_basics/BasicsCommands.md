27.0.0.1:6379> set user:1 Ram
OK

127.0.0.1:6379> set user:2 Shyam
OK

127.0.0.1:6379> set user:3 Karun
OK

127.0.0.1:6379> set user:3 Deepa nx
(nil)

127.0.0.1:6379> get user:1
"Ram"

127.0.0.1:6379> mget user:1 user:2
1) "Ram"
2) "Shyam"

127.0.0.1:6379> mset bike:1 "Deimos" bike:2 "Ares" bike:3 "Vanth"
OK

127.0.0.1:6379> mget bike
1) (nil)

127.0.0.1:6379> mget bike:1 bike:2 bike:3
1) "Deimos"
2) "Ares"
3) "Vanth"

127.0.0.1:6379> set count 0
OK

127.0.0.1:6379> incr count
(integer) 1

127.0.0.1:6379> decr count
(integer) 0

127.0.0.1:6379> incrby count 10
(integer) 10

127.0.0.1:6379> get count
"10"

 ## Refer to docs for HashSet, HashMaps, Redis Streams notes.
 - https://redis.io/docs/latest/develop/data-types/