<?php
// users.php - retourne la liste des utilisateurs en JSON
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

// Config BDD (adapter si besoin)
$host = '127.0.0.1';
$db   = 'utilisateurs';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
    $stmt = $pdo->query('SELECT id, nom, prenom, email FROM utilisateurs ORDER BY id');
    $rows = $stmt->fetchAll();

    echo json_encode([
        'ok' => true,
        'count' => count($rows),
        'data' => $rows,
    ], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
} catch (Throwable $e) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'error' => 'DB_ERROR',
        'message' => $e->getMessage(),
    ]);
}
