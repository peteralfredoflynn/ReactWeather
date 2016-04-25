function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a ==='number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject('Error not both nubmers');
        }
    });
}

addPromise(5,'rs').then(function(sum){console.log(sum);}, function(err){console.log(err);});

addPromise(5,1111).then(function(sum){console.log(sum);}, function(err){console.log(err);});
