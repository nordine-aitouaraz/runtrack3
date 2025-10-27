<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Job 04 - Utilisateurs (AJAX)</title>
    <link rel="stylesheet" href="style.css" />
</head>
<body>
    <h1>Liste des utilisateurs</h1>

    <div class="controls">
        <button id="update">Update</button>
        <span class="status" id="status"></span>
    </div>

    <table aria-describedby="status">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody id="users-body">
            <tr><td colspan="4" class="empty">Cliquez sur "Update" pour charger les utilisateurs…</td></tr>
        </tbody>
    </table>

    <script src="script.js"></script>
</body>
</html>
