<!DOCTYPE html>
<html lang="en">
<head>
    <title>Marjan Stoimchev</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="main.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
</head>
<body>
    
    <!-- Profile Section -->
    <div class="container-md my-3 border py-4">
        <div class="row align-items-center justify-content-center">
            <div class="col-md-3 px-4">
                <div class="text-center">
                    <img src="img/profile.jpg" class="img-fluid rounded-circle pb-2" alt="Marjan Stoimchev">
                    <h2 style="margin-bottom: 0;">Marjan Stoimchev</h2>
                    <p style="margin-bottom: 0;">marjanstoimcev@gmail.com</p>
                    <p style="margin-bottom: 5pt;">
                        <a href="assets/marjan_cv.pdf">CV</a>
                    </p>
                    <p style="margin-bottom: 0;">
                        <a href="https://github.com/marjanstoimchev"><img src="img/icons/github.svg" height="25"></a>
                        <a href="https://scholar.google.com/citations?user=05uc3wEAAAAJ&hl=en"><img src="img/icons/scholar.svg" height="25"></a>
                        <a href="https://www.linkedin.com/in/marjan-stoimchev-636657179/"><img src="img/icons/linkedin.svg" height="25"></a>
                    </p>
                </div>
            </div>

            <div class="col-md-7 px-4 py-4">
                <div class="text-center">
                    <p align="justify">
                        I am a PhD researcher at the <a href="https://www.ijs.si/ijsw/JSI">Jožef Stefan Institute</a>, where I am advised by <a href="http://kt.ijs.si/SasoDzeroski/">Sašo Džeroski</a> and <a href="http://kt.ijs.si/DragiKocev/">Dragi Kocev</a>. I received my MSc in Electrical Engineering from the University of Ljubljana, where I was awarded the <b>Prešern Award for Best Master's Thesis</b>.
                    </p>
                    <p align="justify">
                        My main research interests are in <b>machine learning</b> and <b>computer vision</b>. I focus on the intersection of <b>remote sensing image analysis</b>, <b>semi-supervised learning</b>, <b>self-supervised learning</b>, and <b>deep learning</b>. My work explores how these areas can complement each other to develop systems capable of efficiently learning rich representations from limited labeled data in geospatial applications.
                    </p>
                    <p align="justify">
                        <b>I am currently completing my PhD and actively seeking AI/ML research opportunities in industry.<br>
                        Please reach out if you think I could be a good fit!</b>
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Publications Section -->
    <div class="container-md p-3 my-3 border">
        <h2 class="text-center">Publications</h2>

        <!-- Publication 1 -->
        <div class="publication">
            <div class="row justify-content-center mb-2">
                <div class="col-auto p-0">
                    <br>
                    <img src="img/pub/ssl_mae_2025.png" class="img-fluid" alt="SSL-MAE" style="max-width: 150px">
                </div>
                <div class="col-8 py-4">
                    <p><b>SSL-MAE: Adaptive Semisupervised Learning Framework for Multilabel Classification of Remote Sensing Images Using Masked Autoencoders</b></p>
                    <p>Leveraging masked autoencoders with adaptive semi-supervised learning for state-of-the-art remote sensing image classification.</p>
                    <p><b>Marjan Stoimchev</b>, <a href="#">Jurica Levatic</a>, <a href="http://kt.ijs.si/DragiKocev/">Dragi Kocev</a>, <a href="http://kt.ijs.si/SasoDzeroski/">Sašo Džeroski</a></p>
                    <p>IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing 2025</p>
                    <p><a href="#">paper</a> / <a href="#">code</a></p>
                </div>
            </div>
        </div>
        <hr>

        <!-- Publication 2 -->
        <div class="publication">
            <div class="row justify-content-center mb-2">
                <div class="col-auto p-0">
                    <br>
                    <img src="img/pub/semi_supervised_2024.png" class="img-fluid" alt="Semi-supervised" style="max-width: 150px">
                </div>
                <div class="col-8 py-4">
                    <p><b>Semi-Supervised Multi-Label Classification of Land Use/Land Cover in Remote Sensing Images with Predictive Clustering Trees and Ensembles</b></p>
                    <p>Novel approach combining predictive clustering trees with ensemble methods for efficient land use classification with limited labels.</p>
                    <p><b>Marjan Stoimchev</b>, <a href="#">Jurica Levatić</a>, <a href="http://kt.ijs.si/DragiKocev/">Dragi Kocev</a>, <a href="http://kt.ijs.si/SasoDzeroski/">Sašo Džeroski</a></p>
                    <p>IEEE Transactions on Geoscience and Remote Sensing 2024</p>
                    <p><a href="#">paper</a> / <a href="#">code</a></p>
                </div>
            </div>
        </div>
        <hr>

        <!-- Add more publications following the same pattern -->

    </div>

    <!-- Footer -->
    <div class="container-md p-2 my-3 border text-right small">
        Design inspired by <a href="https://sstojanov.github.io/">Stefan Stojanov</a>
    </div>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
