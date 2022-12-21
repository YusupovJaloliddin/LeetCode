var fourSum = function(nums, target) {
    var ret = [];
    
    if(nums.length == 0)
        return ret;
        
    nums.sort(function(a,b){
        return a - b;    
    });
        
    for(var i = 0; i < nums.length; i++){
        var target2 = target - nums[i];
        
        for(var j = i + 1; j < nums.length; j++){
            var target3 = target2 - nums[j];
            
            var front = j + 1;
            var back = nums.length - 1;
            
            while(front < back){
                var sum = nums[front] + nums[back];
            
                if(sum < target3)
                    front++;
                    
                else if(sum > target3)
                    back--;
                
                else{
                    var temp = new Array(4);
                    temp[0] = nums[i];
                    temp[1] = nums[j];
                    temp[2] = nums[front];
                    temp[3] = nums[back];
                    ret.push(temp);
                    
                    while(front < back && nums[front] === temp[2])
                        front++;
                        
                    while(front < back && nums[back] === temp[3])
                        back--;
                }
            }
            
            while(j + 1 < nums.length && nums[j + 1] === nums[j]) ++j;
        }
        
        while(i + 1 < nums.length && nums[i + 1] === nums[i]) ++i;
    }
    
    return ret;
};
