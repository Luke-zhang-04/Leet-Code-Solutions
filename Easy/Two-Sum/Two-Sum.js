/

function count(target, list) {
  let total = 0
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      total ++
    }
  }
  return total
}

function indice(target, list) {
  let indices = [], i = -1
  while ((i = list.indexOf(target, i+1)) != -1){
      indices.push(i)
    }
  return indices
}

var twoSum = function(nums, target) {
  for (let x = 0; x < nums.length; x++) {
    let i = nums[x]
    if (nums.includes(target-i)) {
      if (count(target-i, nums) >= 2) {
        let indices = indice(target-i, nums)
        return [indices[0], indices[1]]
      } else if (nums.indexOf(i) === nums.indexOf(target-i)) {
        continue
      } else {
        return [nums.indexOf(i), nums.indexOf(target-i)]
      }
    }
  }
}