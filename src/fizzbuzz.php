<?php

// FizzBuzzを1から100まで表示
for ($i = 1; $i <= 100; $i++) {
    // 3で割り切れるかつ5で割り切れる場合
    if ($i % 3 === 0 && $i % 5 === 0) {
        echo "FizzBuzz\n";
    }
    // 3で割り切れる場合
    elseif ($i % 3 === 0) {
        echo "Fizz\n";
    }
    // 5で割り切れる場合
    elseif ($i % 5 === 0) {
        echo "Buzz\n";
    }
    // その他の数はそのまま表示
    else {
        echo $i . "\n";
    }
}