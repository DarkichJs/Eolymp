def compare_versions(version1, version2):

    components1 = [int(v) for v in version1.split('.')]
    components2 = [int(v) for v in version2.split('.')]
    print(components1)
    print(components2)

    for c1, c2 in zip(components1, components2):
        if c1 > c2:
            print(c2)
            return True
        elif c1 < c2:
            print(c2)
            return False

    return len(components1) >= len(components2)