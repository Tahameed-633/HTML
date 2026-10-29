function average(marks)
{
    let total=0;
    for(const n of marks)
    {
        total=total+n;
        
    }
    return total/marks.length;
}
console.log(average([78,85,88,70]));
