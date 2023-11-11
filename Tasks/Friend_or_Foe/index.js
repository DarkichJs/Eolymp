function friend(names) {
    const friends = names.filter(name => name.length === 4);
    return friends;
  }

console.log(friend(["Love", "Your", "Face", "1"]))