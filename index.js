class linkList{
    constructor(data){
        this.head = {
            value : data ,
            next : null
        }
        this.tail = this.head
    }

    appendNode(data){
        var newNode = {
            value : data,
            next : null
        } 
        this.head.next = newNode

        this.tail = newNode

    }

    leadNode(data){
        var count = 0;
        var currentNode = this.head

        while(count != data){
            count ++
            currentNode = this.head.next
        }
        return currentNode
    }

    insertNode(index , data){
        var newNode = {
            value : data,
            next : null
        }
        var leaderNode = this.leadNode(index - 1)

        leaderNode.next = newNode



        console.log("leaderNode ====>" , )
    }

}



var newlist =new linkList(10)

newlist.appendNode(25)


newlist.insertNode(1,30)

console.log(newlist)