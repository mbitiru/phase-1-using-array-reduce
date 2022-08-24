const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// using reduce method 
const totalBatteries = batteryBatches.reduce( function(total, batches) {
    return batches + total
}
)
