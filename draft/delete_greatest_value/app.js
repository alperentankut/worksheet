var deleteGreatestValue = function (grid){
    let count = 0
    for(let i = 0 ; i<grid.length ; i++){
        for(let j = 0 ; j<grid[i].length ; j++){
            let number = grid[i][0];
            if(grid[i][j]>number){
                count += grid[i][j]
                grid.splice(i,j);
            }
            

        }
        console.log(count)
    }

}


deleteGreatestValue([[1,2,4],[3,3,1]])