var innerFunction = function()
{
    return "Hello World From Inner function";
}

var outerFunction = function(fn)
{
    console.log(fn());
}

outerFunction(innerFunction);