/**
 * Count the number of signatures a student can garner before their
 * is being passed back to them.
 *
 * We'd assume that the number that represents each student in the
 * is the student number and the student's seat number is the index
 * occupied by that student in the array.
 *
 * At least every student gets one signature from themself. After a
 * student has signed the yearbook they are holding, they decide the
 * next student to pass the yearbook to by subtracting `1` from their
 * student number. Whichever student reside at the newly calculated
 * seat number is passed the yearbook till the yearbook returns to the
 * student it originally came from.
 *
 * @param {number[]} arr The array of students
 * @returns {number[]} The number of signatures each student garnered
 */
function findSignatureCounts(arr) {
  // Write your code here
  const signatures = Array(arr.length).fill(1); // each student signs their yearbooks
  const map = new Map();

  for (let seat_number = 0; seat_number < arr.length; seat_number++) {
    let student_number = arr[seat_number];
    let next_seat_number = student_number - 1;

    while (next_seat_number !== seat_number) {
      if (map.has(arr[next_seat_number])) {
        signatures[seat_number] = map.get(arr[next_seat_number]);
        break;
      }

      next_seat_number = arr[next_seat_number] - 1;
      signatures[seat_number]++;
    }

    map.set(student_number, signatures[seat_number]);
  }

  return signatures;
}

export { findSignatureCounts };
