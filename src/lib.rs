use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn bubble_sort(arr: &mut [i32]) {
    let mut swap;

    for i in 0..arr.len() - 1 {
        swap = false;
        // skip last index (i) since its always sorted
        for j in 0..arr.len() - i - 1 {
            if arr[j + 1] < arr[j] {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swap = true
            }
        }
        if !swap {
            break;
        }
    }
}

#[wasm_bindgen]
pub fn selection_sort(arr: &mut [i32]) {
    for i in 0..arr.len() {
        let mut min_idx = i;
        for j in i..arr.len() {
            if arr[j] < arr[min_idx] {
                min_idx = j;
            }
        }

        let temp = arr[i];
        arr[i] = arr[min_idx];
        arr[min_idx] = temp;
    }
}
