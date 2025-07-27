## BASIC COMMANDS FOR LISTS IN REDIS

- LPUSH adds a new element to the head of a list; RPUSH adds to the tail.
- LPOP removes and returns an element from the head of a list; RPOP does the same but from the tails of a list.
- LLEN returns the length of a list.
- LMOVE atomically moves elements from one list to another.
- LTRIM reduces a list to the specified range of elements.

127.0.0.1:6379> lpush messages hey
(integer) 1

127.0.0.1:6379> lpush messages hello
(integer) 2

127.0.0.1:6379> rpush messages bye
(integer) 3

127.0.0.1:6379> lpop messages
"hello"

### Blocking commands
Lists support several blocking commands. For example:
- BLPOP removes and returns an element from the head of a list. If the list is empty, the command blocks until an element becomes available or until the specified timeout is reached.

- BLMOVE atomically moves elements from a source list to a target list. If the source list is empty, the command will block until a new element becomes available.
See the complete series of list commands.

127.0.0.1:6379> lrange messages 0 -1
1) "byr"
2) "hello"
3) "hey"

1127.0.0.1:6379> lrange messages 0 1
1) "byr"
2) "hello"
