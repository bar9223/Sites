<?php

$dictionary = [
    'onet.pl' => 'http://onet.pl',
    'onet.pl/sport' => 'http://onet.pl/sport',
    'wp.pl' => 'http://wp.pl',
    'wp.pl/sport' => 'http://wp.pl/sport',
    'interia.pl' => 'http://interia.pl',
    'interia.pl/sport' => 'http://interia.pl/sport',
];

$search = trim($_GET['search']);

$result = [];

if (!empty($search)) {
    foreach ($dictionary as $key => $value) {
        if (strpos($key, $search) !== false) {
            $result[$key] = $value;
        }
    }
}

echo json_encode($result);
