def cat_mouse(x,j):
    if 'C' in x and 'D' in x and 'm' in x:
        cat_pos = x.index('C')
        dog_pos = x.index('D')
        mouse_pos = x.index('m')

        cat_mouse_distance = abs(cat_pos - mouse_pos)

        if cat_mouse_distance <= j:
            if (cat_pos < dog_pos < mouse_pos) or (mouse_pos < dog_pos < cat_pos):
                return 'Protected!'
            else:
                return 'Caught!'
        else:
            return 'Escaped!'
    else:
        return 'boring without all three'