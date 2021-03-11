/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    // console.log(this.cache);
    // setTimeout(() => { }, 500);
    let item = this.cache.get(key);
    item.date = Date.now();
    this.cache.set(key, item)
    return item.value;
  }
  else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (newKey, newValue) {
  if (this.cache.size >= this.capacity) {
    //cache is full, remove the least recently used key value pair
    let minDate = Infinity;
    let keyToDelete = null;
    for (let [key, item] of this.cache) {
      if (item.date < minDate) {
        minDate = item.date;
        keyToDelete = key;
      }
    };
    this.cache.delete(keyToDelete);
    // console.log(this.cache);
  }
  this.cache.set(newKey, { date: Date.now(), value: newValue });
  return null;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 * ["LRUCache","put","put","get","put","get","put","get","get","get"]
          [[2],[1,1],[2,2],[1],[3,3],   [2], [4,4],[1]   ,[3],  [4]]
 */
let lruCache = new LRUCache(2);

console.log(lruCache.put(1, 1));
console.log(lruCache.put(2, 2));
console.log(lruCache.get(1));
console.log(lruCache.put(3, 3));
console.log(lruCache.get(2));
console.log(lruCache.put(4, 4));
console.log(lruCache.get(1));
console.log(lruCache.get(3));
console.log(lruCache.get(4));
