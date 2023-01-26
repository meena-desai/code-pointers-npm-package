function collection(input){
    const arr = [...input]
    return{
        max: function(){
            return Math.max(...arr)
        },
        min: function(){
            return Math.min(...arr)
        }
    }
}

module.exports = collection

