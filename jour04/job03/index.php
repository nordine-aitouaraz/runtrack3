<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job 03</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1><img src="pokeball.png" alt="Poké Ball" class="pokeball"> Filtrer les Pokémon</h1>
    
    <form id="filterForm">
        <div>
            <label for="id">ID :</label>
            <input type="text" id="id" name="id">
        </div>
        
        <div>
            <label for="nom">Nom :</label>
            <input type="text" id="nom" name="nom">
        </div>
        
        <div>
            <label for="type">Type :</label>
            <select id="type" name="type">
                <option value="">Tous</option>
                <option value="Grass">Grass</option>
                <option value="Poison">Poison</option>
                <option value="Fire">Fire</option>
                <option value="Water">Water</option>
                <option value="Bug">Bug</option>
                <option value="Normal">Normal</option>
                <option value="Electric">Electric</option>
                <option value="Ground">Ground</option>
                <option value="Fairy">Fairy</option>
                <option value="Fighting">Fighting</option>
                <option value="Psychic">Psychic</option>
                <option value="Rock">Rock</option>
                <option value="Steel">Steel</option>
                <option value="Ice">Ice</option>
                <option value="Ghost">Ghost</option>
                <option value="Dragon">Dragon</option>
            </select>
        </div>
        
        <div>
            <input type="button" id="filtrer" value="Filtrer">
        </div>
    </form>
    
    <div id="results"></div>

    <script src="script.js"></script>
</body>
</html>
