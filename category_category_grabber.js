<html>

<head>
    <title>SiIvaGunner Wiki Category Category Grabber</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">

    <style>
        body {
            background-color: #eee;
        }

        .header-btn {
            border-radius: 0;
            margin: 0;
            padding: 1px;
            padding-right: 15px;
        }

        .header-btn span {
            font-size: small;
            border-radius: 0;
        }

        /* Local Styling */
        input {
            width: 70% !important;
        }

        #size {
            width: min-content !important;
        }
    </style>

    <script src="category_category_grabber.js"></script>
</head>

<body>
    <div class="m-2 mb-4">
        <div class="m-2 mb-4">
            <a href="index.html" class="btn header-btn">
                <span>Shared Item Grabber</span>
            </a>
            <a href="contributor_game.html" class="btn header-btn">
                <span>Category Category Grabber</span>
            </a>
        </div>
    </div>
    <div class="container">
        <div class="row text-center">
            <div class="col-12 col-md-4 pb-1  text-end pe-5">Category:</div>
            <div class=" col-12 col-md-6 pb-1">
                <input id="cat" class="form-control">
            </div>
        </div>
    </div>
    <div class="container" id="extra">
        <div class="row text-center">
            <div class="col-12 col-md-4 pb-1  text-end pe-5">Filter Category:</div>
            <div class=" col-12 col-md-6 pb-1">
                <input id="fil" class="form-control">
            </div>
        </div>
        <div class="row text-center">
            <div class="col-12 col-md-4 pb-1  text-end pe-5">Negative Category:</div>
            <div class=" col-12 col-md-6 pb-1">
                <input id="neg" class="form-control">
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row text-center mb-5">
            <div class="col-12 col-md-4 text-end pe-5">
                Show category size:
            </div>
            <div class="col-12 col-md-4 text-start d-flex align-center pt-1">
                <input type="checkbox" id="size" name="size" onchange="checkboxCheck()">
            </div>
        </div>
        <div class="row text-center pb-3">
            <button onclick="main()" class="col-12 btn btn-secondary"
                style="width: fit-content; margin: 0 auto;">Search</button>
        </div>
        <div class="row">
            <div class="col-md-4 d-none d-md-block"></div>
            <p id="output" class="col-12 col-md-8" style="width: fit-content;tab-size: 4;">
                Enter a category in the "Category" field.<br>This tool will go through the pages in your inputted
                category, and count all of their categories<br>So you can see how many categories are in the pages of
                your desired category!<br><br>The Filter category allows you to filter the result by their own
                category<br>For example, you can enter the following into that field to get your desired results!<br>
                <b>&emsp;&emsp;- Playlists:</b> Will show you only the games<br>
                <b>&emsp;&emsp;- Albums:</b> Will show you only the albums<br>
                <b>&emsp;&emsp;- Rips by author:</b> Will show you only the rippers<br>
                <b>&emsp;&emsp;- Rips by month:</b> Will show you only the months<br>
                And so on!<br>The Negative category will do the opposite, and will remove the category you don't want to
                see
            </p>
        </div>
    </div>
</body>

</html>
