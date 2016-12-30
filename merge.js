console.log(mergeDataStreams(dataSource1, dataSource2))

function mergeDataStreams(stream1, stream2) {
  var merged = [];
  for (object1 in stream1) {
    for (object2 in stream2) {
      console.log(object1)
      if (object1 === object2) {
        //console.log(object1['id'])
        for (var entry1 in object1) {
          //console.log(entry1);
          temp = {}
          entry1.object1 = entry1.temp
          merged.push(temp)
        }
        for (entry2 in object2) {
          temp2 = {}
          entry2.object2 = entry2.temp2
          merged.push(temp2)
        }
      }
    }
  }
  return merged
}

// data
var dataSource1 = [
    {
      id: '0',
      firstName: 'Juan',
      lastName: 'Doe',
      age: 32
    },
    {
      id: '1',
      firstName: 'Jane',
      lastName: 'Doe',
      age: 31
    },
    {
      id: '2',
      firstName: 'Janice',
      lastName: 'Doe',
      age: 30
    },
    {
      id: '3',
      firstName: 'Jake',
      lastName: 'Doe',
      age: 29
    },
  ];

var dataSource2 = [
    {
      id: '0',
      occupation: 'architect',
      address: {
        street: '123 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '1',
      occupation: 'architect',
      address: {
        street: '234 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '2',
      occupation: 'architect',
      address: {
        street: '345 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
    {
      id: '3',
      occupation: 'architect',
      address: {
        street: '456 Main St',
        city: 'CityTown',
        country: 'USA'
      }
    },
  ];
