def plastic_balance(lst):
    while len(lst) >= 2:
        if((lst[0] + lst[-1] != sum(lst[1:-1]) )):
            lst.pop(0)
            lst.pop(-1)
        else:
             break
    if(len(lst) == 1):
            if(lst[0] + lst[0] != 0):
                lst.pop(0)
    return lst

print(plastic_balance([0,104,3,101,0,111]))