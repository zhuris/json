const Feed = {
    "1588291200-a" : {
      "id" : "J8iXjOxI0fWJWckJK8cGjZzm7Rd2",
      "message" : "old"
    },
    "1593580504-d" : {
      "id" : "J8iXjOxI0fWJWckJK8cGjZzm7Rd2",
      "message" : "hello"
    },
}


//пройдусь по обЪекту циклом 

for ( let i in Feed) {
    let key = i;     // получу все ключи объекта 
   let value = Feed[i] //получу все значения у ключей 
   key =  key.replace(/-[\s\S]*/i , "")  // изменю ключи через замену с регулярным выражением 
   value["time"]  = Number(key) // добавлю в значения форматированные данные 


}

console.log(Feed)