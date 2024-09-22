# Bookstore
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Bookstore</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            margin: 0;
            padding: 20px;
        }
        header {
            text-align: center;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
        }
        .book-list {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
            margin-top: 20px;
        }
        .book {
            background-color: white;
            border: 1px solid #ddd;
            padding: 10px;
            width: 200px;
            text-align: center;
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.1);
        }
        .book img {
            width: 100px;
            height: 150px;
        }
        .book h3 {
            font-size: 18px;
            margin: 10px 0;
        }
        .book p {
            font-size: 14px;
            color: gray;
        }
        .book button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            width: 100%;
        }
        .book button:hover {
            background-color: #45a049;
        }
        footer {
            text-align: center;
            margin-top: 50px;
            color: #777;
        }
    </style>
</head>
<body>

<header>
    <h1>Welcome to Our Online Bookstore</h1>
</header>

<div class="book-list" id="book-list">
    <!-- JavaScript will insert book items here -->
</div>

<footer>
    <p>© 2024 Online Bookstore</p>
</footer>

<script src="app.js"></script>

</body>
</html>
