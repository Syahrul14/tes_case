<?php

$digit = "1243752521494312";

$letters = [
    "",
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J",
    "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"
];

$length = strlen($digit);
$combinations = [];

// Rekursi untuk mencari semua kombinasi huruf yang valid
function findCombinations($prefix, $remaining, &$combinations, $letters) {
    if ($remaining == "") {
        array_push($combinations, $prefix);
    } else {
        for ($i = 1; $i <= 26; $i++) {
            $letter = $letters[$i];
            if (substr($remaining, 0, strlen($letter)) == $letter) {
                findCombinations($prefix . $letter, substr($remaining, strlen($letter)), $combinations, $letters);
            }
        }
    }
}

// Memanggil fungsi rekursi untuk mencari kombinasi huruf
findCombinations("", $digit, $combinations, $letters);

// Mencari kombinasi huruf yang valid
$valid_combinations = [];
foreach ($combinations as $combination) {
    // Menghitung jumlah kemunculan setiap huruf
    $counts = [];
    for ($i = 0; $i < strlen($combination); $i++) {
        $letter = $combination[$i];
        if (!isset($counts[$letter])) {
            $counts[$letter] = 0;
        }
        $counts[$letter]++;
    }
    // Memeriksa apakah setiap digit muncul dalam kombinasi huruf
    $valid = true;
    for ($i = 0; $i < $length; $i++) {
        $digit = $digit[$i];
        $letter = $letters[$digit];
        if (!isset($counts[$letter]) || $counts[$letter] == 0) {
            $valid = false;
            break;
        }
        $counts[$letter]--;
    }
    // Menambahkan kombinasi huruf yang valid
    if ($valid) {
        array_push($valid_combinations, $combination);
    }
}

// Menampilkan jumlah dan daftar kombinasi huruf yang valid
$count = count($valid_combinations);
echo "Jumlah Kombinasi ada " . $count . "<br>";
for ($i = 0; $i < $count; $i++) {
    echo "[" . $i . "] => " . $valid_combinations[$i] . "<br>";
}

?>
