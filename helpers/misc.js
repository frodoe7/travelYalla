function trunc (text,limit)
{
    if (text.length > limit) return (text.substring(0,limit) + "..");
    else return text;
}

module.exports = {
    trunc
}