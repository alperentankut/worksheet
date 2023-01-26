var deleteGreatestValue = function (grid){
    let greatestValue = 0
    let max = 0
    let arr = []
    for(let i = 0 ; i<grid.length ; i++){
        for(let j = 0 ; j<grid[i].length ; j++){
            max = Math.max(...grid[i])
            arr.push(max)
            grid[i].splice(grid.indexOf(Math.max(grid[i])))
            }
        greatestValue += Math.max(...arr) 
           
    }
    console.log(arr)
    console.log(grid)
    
    return greatestValue
}

console.log(deleteGreatestValue([[9,81],[33,17]]))

//