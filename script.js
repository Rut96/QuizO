//==============================================
// PART 1: INITIALIZATION AND DATA
//==============================================

let gameData = {
    categories: [
        "Найди Леню", "Шрек", "Любимые вещи", "Еда", "Мемы"
    ],
    questions: [
        // Категория 1: Найди Леню
        [
            {
                price: 100,
                question: "Где?",
                images: [
                    "assets/1/ai2.png",
                    "assets/1/ai3.png",
                    "assets/1/ai1.png",
                    "assets/1/ai4.png",
                ],
                correctImageIndex: 2,
                answerImage: "assets/1/l1.jpeg",
                asked: false,
                type: "image_choice"
            },
            {
                price: 200,
                question: "Где?",
                images: [
                    "assets/2/ai2.png",
                    "assets/2/ai1.png",
                    "assets/2/ai3.png",
                    "assets/2/ai4.png",
                ],
                correctImageIndex: 1,
                answerImage: "assets/2/l1.jpeg",
                asked: false,
                type: "image_choice"
            },
            {
                price: 300,
                question: "Где?",
                images: [
                    "assets/3/ai4.png",
                    "assets/3/ai1.png",
                    "assets/3/ai2.png",
                    "assets/3/ai3.png",
                ],
                correctImageIndex: 1,
                answerImage: "assets/3/l1.jpeg",
                asked: false,
                type: "image_choice"
            },
            {
                price: 400,
                question: "Где?",
                images: [
                    "assets/4/ai2.png",
                    "assets/4/ai3.png",
                    "assets/4/ai4.png",
                    "assets/4/ai1.png",
                ],
                correctImageIndex: 3,
                answerImage: "assets/4/l1.jpeg",
                asked: false,
                type: "image_choice"
            },
            {
                price: 500,
                question: "Где?",
                images: [
                    "assets/5/ai1.png",
                    "assets/5/ai2.png",
                    "assets/5/ai3.png",
                    "assets/5/ai4.png",
                ],
                correctImageIndex: 0,
                answerImage: "assets/5/l1.jpg",
                asked: false,
                type: "image_choice"
            },
        ],
        // Категория 2: Шрек  
        [
            {
                price: 100,
                question: "Кто был протоипом для Шрека?",
                images: [
                    "assets/shrek/s1.jpg", // Морис Тийе — рестлер по прозвищу Французский ангел
                    "assets/shrek/s2.webp", // Андре Гигант - французский рестлер
                    "assets/shrek/s3.jpeg", // Василий Алексеев — олимпийский тяжелоатлет
                    "assets/shrek/s4.jpg", // огурец
                ],
                correctImageIndex: 0,
                answer: "Морис Тийе",
                asked: false,
                type: "image_choice"
            },
            {
                price: 400,
                question: "расставить нас в порядке знакомства",
                answer: "Тамара(16-17),Ханна,Рут,Даша", 
                asked: false, 
                type: "text"
            },
            {
                price: 300,
                question: "Кто поймал букет невесты на свадьбе Шрека и Фионы?",
                options: ["Золушка", "Один из трех поросят", "Дракониха", "Осел"],
                correctOptionIndex: 2,
                answer: "Дракониха",
                asked: false,
                type: "text"
            },
            {
                price: 400,
                question: "Угадай часть от картики",
                images: [
                    "assets/shrek/find2.jpg",
                ],
                answer: "-",
                answerImage: "assets/shrek/find1.jpg",
                asked: false,
                type: "image_choice"

            },
            { price: 500, question: "назовите имя хотя бы одного ребенка Шрека и Фионы", answer: "Фаркл, Фергус и Фелиция", asked: false, type: "text" },  

        ],
        // Категория 3: Любимые вещи  
        [
            {
                price: 100,
                question: "Любимая еда",
                options: ["Лапша", "Лопша", "Лпша", "Эчпочмак"],
                correctOptionIndex: 1,
                answer: "Лопша",
                answerImage: "assets/fav/fav2.jpg",
                asked: false,
                type: "multiple_choice_image_answer"
            },
            {
                price: 200,
                question: "Любимый цвет",
                options: ["Болотный", "Синий", "Кирпичный", "Сиреневый"],
                correctOptionIndex: 0,
                answer: "Болотный",
                answerImage: "assets/fav/fav1.jpg",
                asked: false,
                type: "multiple_choice_image_answer"
            },
            {
                price: 300,
                question: "Лучше всего умеет делать",
                options: ["Гатовить", "Тонцевать", "Петь", "Вышывать"],
                correctOptionIndex: 3,
                answer: "Вышывать",
                answerImage: "assets/fav/fav3.jpg",
                asked: false,
                type: "multiple_choice_image_answer"
            },
            {
                price: 400,
                question: "Любимое животное",
                options: ["Котик", "Шенок", "Хомяк", "Черепаха"],
                correctOptionIndex: 1,
                answer: "Шенок",
                answerImage: "assets/fav/fav4.jpg",
                asked: false,
                type: "multiple_choice_image_answer"
            },
            {
                price: 500,
                question: "Любимая неугомонная детка",
                options: ["Онжелика", "Анжелика", "Онжелика (О перечерунуто, сверху А)", "Анжелика (А перечерунуто, сверху О)"],
                correctOptionIndex: 2,
                answer: "Онжелика (О перечерунуто, сверху А)",
                answerImage: "assets/fav/fav5.jpg",
                asked: false,
                type: "multiple_choice_image_answer"
            },
        ],
        // Категория 4: Еда  
        [
            {
                price: 100,
                question: "Что вкуснее?",
                images: [
                    "/assets/food/kotleta-s-pyureshkoj.jpg",
                    "/assets/food/kotletki-s-makaroshkami.jpg",
                ],
                asked: false,
                type: "open"
            },
            {
                price: 200,
                question: "Что вкуснее?",
                images: [
                    "/assets/food/default.jpg",
                    "/assets/food/kabac.jpg",
                ],
                asked: false,
                type: "open"
            },
            {
                price: 300,
                question: "Что вкуснее?",
                images: [
                    "/assets/food/default.jpg",
                    "/assets/food/chak-chak.jpg",
                ],
                asked: false,
                type: "open"
            },
            {
                price: 400,
                question: "Угадайте мелодию:",
                audioSrc: "assets/audio/smusic.mp3",
                answer: "Название песни",
                asked: false,
                type: "audio_question"
            },
            {
                price: 500,
                question: "Что вкуснее?",
                images: [
                    "/assets/food/default.jpg",
                    "/assets/food/hearts.jpg",
                ],
                asked: false,
                type: "open"
            }
        ],
        // Категория 5: Мемы  
        [
            { price: 100, question: "Тяни Мем", answer: "Только на букву П", asked: false, type: "text" },
            { price: 200, question: "Тяни Мем", answer: "Вообще без слов и звуков", asked: false, type: "text" },
            { price: 300, question: "Тяни Мем", answer: "Стоя спиной ко всем", asked: false, type: "text" },
            { price: 400, question: "Тяни Мем", answer: "Без рук", asked: false, type: "text" },
            { price: 500, question: "Тяни Мем", answer: "Только мимикой", asked: false, type: "text" }
        ]
    ]
};


let teams = [
    { name: "Команда 1", score: 0 },
    { name: "Команда 2", score: 0 }
];

let editMode = false;
let currentQuestion = null;

document.addEventListener('DOMContentLoaded', function () {
    // Try to load saved game state first
    loadGameState();

    // Initialize the game board and scoreboard
    initBoard();
    initScoreBoard();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('edit-mode-btn').addEventListener('click', toggleEditMode);
    document.querySelector('.score-board').addEventListener('click', function (event) {
        if (event.target.id === 'add-team-btn' || event.target.closest('#add-team-btn')) {
            addNewTeam();
        }
    });
    document.getElementById('show-answer-btn').addEventListener('click', showAnswer);
    document.getElementById('close-modal-btn').addEventListener('click', closeModal);
    document.getElementById('add-image-btn').addEventListener('click', addNewImageField);
    document.getElementById('cancel-edit-btn').addEventListener('click', function () {
        document.getElementById('edit-modal').style.display = 'none';
    });
    document.getElementById('edit-type').addEventListener('change', handleQuestionTypeChange);
    window.addEventListener('resize', adjustModalSize);
}

function saveGameState() {
    // Create an object with all the data we want to save
    const gameState = {
        questions: gameData.questions,  // Includes the 'asked' property for each question
        teams: teams,                   // Includes team names and scores
        categories: gameData.categories // In case categories were edited
    };

    // Convert to string and save to localStorage
    localStorage.setItem('olinaIgraGameState', JSON.stringify(gameState));
    console.log('Game state saved');
}

function loadGameState() {
    // Try to get saved game state
    const savedState = localStorage.getItem('olinaIgraGameState');

    // If there's saved state, parse and apply it
    if (savedState) {
        try {
            const gameState = JSON.parse(savedState);

            // Restore questions data (including which ones were asked)
            if (gameState.questions) {
                gameData.questions = gameState.questions;
            }

            // Restore teams
            if (gameState.teams) {
                teams = gameState.teams;
            }

            // Restore categories
            if (gameState.categories) {
                gameData.categories = gameState.categories;
            }

            console.log('Game state loaded successfully');
            return true;
        } catch (error) {
            console.error('Error loading game state:', error);
            return false;
        }
    }
    return false;
}

// Reset game state
function resetGameState() {
    if (confirm('Вы уверены, что хотите начать игру сначала? Это сбросит все вопросы и счет команд.')) {
        // Reset all questions to not asked
        for (let category = 0; category < gameData.questions.length; category++) {
            for (let price = 0; price < gameData.questions[category].length; price++) {
                if (gameData.questions[category][price]) {
                    gameData.questions[category][price].asked = false;
                }
            }
        }

        // Reset all team scores to 0
        teams.forEach(team => {
            team.score = 0;
        });

        // Save the reset state
        saveGameState();

        // Update the UI
        initBoard();
        initScoreBoard();

        alert('Игра сброшена!');
    }
}

//==============================================
// PART 2: GAME BOARD AND QUESTION DISPLAY
//==============================================

function initBoard() {
    const board = document.querySelector('.board');
    board.innerHTML = '';

    for (let category = 0; category < gameData.categories.length; category++) {
        // Category header
        const categoryElement = document.createElement('div');
        categoryElement.className = 'category';
        categoryElement.textContent = gameData.categories[category];

        if (editMode) {
            categoryElement.classList.add('editable');
            categoryElement.onclick = function () {
                editCategory(category);
            };
        }

        board.appendChild(categoryElement);

        // Questions for this category
        for (let price = 0; price < 5; price++) {
            // Check if this question exists in the data
            if (!gameData.questions[category][price]) {
                continue;
            }

            const questionData = gameData.questions[category][price];
            const questionElement = document.createElement('div');
            questionElement.className = 'question';
            if (questionData.asked) {
                questionElement.className += ' asked';
            }
            if (editMode) {
                questionElement.className += ' editable';
            }
            questionElement.textContent = questionData.price;
            questionElement.onclick = function () {
                if (editMode) {
                    editQuestion(category, price);
                } else if (!questionData.asked) {
                    openQuestion(category, price);
                }
            };
            board.appendChild(questionElement);
        }
    }
}

function openQuestion(category, price) {
    const questionData = gameData.questions[category][price];
    currentQuestion = questionData;

    const modalQuestion = document.getElementById('modal-question');
    const modalAnswer = document.getElementById('modal-answer');
    const contentContainer = document.getElementById('modal-content-container');
    const showAnswerBtn = document.getElementById('show-answer-btn');

    // Clear previous content
    modalQuestion.textContent = questionData.question;
    modalAnswer.textContent = '';
    modalAnswer.style.display = 'none';
    contentContainer.innerHTML = '';

    // Reset modal content class
    document.querySelector('.modal-content').classList.remove('with-answer');

    // Special case for Category 4 (Еда) - hide show answer button
    if (category === 3) { // Index 3 is Category 4
        showAnswerBtn.style.display = 'none';
    } else {
        showAnswerBtn.style.display = 'block';
    }

    // Create content based on question type
    switch (questionData.type) {
        case 'image_choice':
            createImageChoiceContent(questionData, contentContainer);
            break;
        case 'multiple_choice_image_answer':
            createMultipleChoiceContent(questionData, contentContainer);
            break;
        case 'audio_question':
            createAudioQuestionContent(questionData, contentContainer);
            break;
        case 'open':
        case 'image_choice_open':
            if (questionData.images && questionData.images.length > 0) {
                createOpenQuestionWithImagesContent(questionData, contentContainer);
            }
            break;
    }

    // Display the modal
    document.getElementById('question-modal').style.display = 'block';

    // Adjust size
    setTimeout(adjustModalSize, 0);

    // Mark question as asked
    questionData.asked = true;

    // Save the game state
    saveGameState();

    // Update the game board
    initBoard();
}

function closeModal() {
    document.getElementById('question-modal').style.display = 'none';
    document.querySelector('.modal-content').classList.remove('with-answer');
    document.getElementById('show-answer-btn').style.display = 'block';
    currentQuestion = null;
}

function adjustModalSize() {
    const modal = document.getElementById('question-modal');
    const modalContent = modal.querySelector('.modal-content');
    const questionText = document.getElementById('modal-question');
    const contentContainer = document.getElementById('modal-content-container');
    const buttonContainer = modal.querySelector('.button-container');

    // Get window dimensions
    const windowHeight = window.innerHeight;

    // Reset any previously set height to measure natural size
    contentContainer.style.maxHeight = '';

    // Get heights of components
    const questionHeight = questionText.offsetHeight;
    const buttonsHeight = buttonContainer.offsetHeight;
    const paddingHeight = 60; // Account for padding

    // Calculate max height for content area
    const maxContentHeight = windowHeight * 0.8 - questionHeight - buttonsHeight - paddingHeight;

    // Set max height on content container
    contentContainer.style.maxHeight = `${maxContentHeight}px`;
}

//==============================================
// PART 3: CREATING QUESTION CONTENT
//==============================================

function createImageChoiceContent(questionData, container) {
    const imageGrid = document.createElement('div');
    imageGrid.id = 'image-choices';
    imageGrid.className = 'image-grid';

    // Set data attribute for number of images to help with CSS styling
    imageGrid.setAttribute('data-images', questionData.images.length);

    questionData.images.forEach((src, index) => {
        const imageChoice = document.createElement('div');
        imageChoice.className = 'image-choice';
        imageChoice.dataset.index = index;

        const img = document.createElement('img');
        img.src = src;
        img.alt = `Вариант ${index + 1}`;

        // Preload images to get their dimensions
        img.onload = function () {
            // After image loads, check if we need to adjust the container
            adjustModalSize();
        };

        imageChoice.appendChild(img);
        imageChoice.onclick = function () {
            document.querySelectorAll('.image-choice').forEach(el => {
                el.classList.remove('selected');
            });
            this.classList.add('selected');
        };

        imageGrid.appendChild(imageChoice);
    });

    container.appendChild(imageGrid);
}

function createMultipleChoiceContent(questionData, container) {
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-container';

    questionData.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.className = 'option-button';
        optionButton.textContent = option;
        optionButton.dataset.index = index;

        optionButton.onclick = function () {
            document.querySelectorAll('.option-button').forEach(btn => {
                btn.classList.remove('selected');
            });

            this.classList.add('selected');
        };

        optionsContainer.appendChild(optionButton);
    });

    container.appendChild(optionsContainer);
}

function createAudioQuestionContent(questionData, container) {
    const audioPlayer = document.createElement('audio');
    audioPlayer.controls = true;
    audioPlayer.src = questionData.audioSrc;

    const audioContainer = document.createElement('div');
    audioContainer.className = 'audio-container';
    audioContainer.appendChild(audioPlayer);

    container.appendChild(audioContainer);
}

function createOpenQuestionWithImagesContent(questionData, container) {
    const imageGrid = document.createElement('div');
    imageGrid.className = 'image-grid';

    // Set data attribute for number of images
    imageGrid.setAttribute('data-images', questionData.images.length);

    questionData.images.forEach((src, index) => {
        const imageChoice = document.createElement('div');
        imageChoice.className = 'image-choice';

        const img = document.createElement('img');
        img.src = src;
        img.alt = `Изображение ${index + 1}`;

        // Preload images
        img.onload = function () {
            adjustModalSize();
        };

        imageChoice.appendChild(img);
        imageGrid.appendChild(imageChoice);
    });

    container.appendChild(imageGrid);
}

//==============================================
// PART 4: SHOWING ANSWERS
//==============================================

function showAnswer() {
    const answerElement = document.getElementById('modal-answer');
    const contentContainer = document.getElementById('modal-content-container');

    // Clear the answer element
    answerElement.innerHTML = '';
    answerElement.style.display = 'block';

    // Add class to the modal content for better styling when answers are shown
    document.querySelector('.modal-content').classList.add('with-answer');

    // Get the current category and price indices
    const categoryIndex = getCategoryIndexForQuestion(currentQuestion);
    const priceIndex = getPriceIndexForQuestion(currentQuestion);

    // Handle different categories with specific behaviors
    if (categoryIndex === 0) {
        // Category 1 ("Найди Леню"): Show side-by-side comparison
        showSideBySideComparison(currentQuestion, contentContainer);
    } else if (categoryIndex === 1) {
        // Category 2 ("Шрек"): For all questions, show only the answer image
        showOnlyAnswerImage(currentQuestion,
            priceIndex === 1 ? contentContainer : answerElement);
    } else if (categoryIndex === 3) {
        // Category 4 ("Еда"): These are open questions with no definitive answer
        // But we already handle this by hiding the "Show Answer" button in openQuestion
    } else {
        // Default behavior for other categories
        switch (currentQuestion.type) {
            case 'image_choice':
                createImageChoiceAnswer(currentQuestion, answerElement);
                break;
            case 'multiple_choice_image_answer':
                createMultipleChoiceAnswer(currentQuestion, answerElement);
                break;
            case 'audio_question':
                createAudioAnswer(currentQuestion, answerElement);
                break;
            default:
                // For regular text questions
                answerElement.textContent = currentQuestion.answer;
                break;
        }
    }

    // Adjust modal size after showing the answer
    setTimeout(adjustModalSize, 0);

    // Hide the show answer button
    document.getElementById('show-answer-btn').style.display = 'none';
}

// Helper function to get category index for a question
function getCategoryIndexForQuestion(question) {
    for (let i = 0; i < gameData.questions.length; i++) {
        for (let j = 0; j < gameData.questions[i].length; j++) {
            if (gameData.questions[i][j] === question) {
                return i;
            }
        }
    }
    return -1;
}

// Helper function to get price index for a question
function getPriceIndexForQuestion(question) {
    for (let i = 0; i < gameData.questions.length; i++) {
        for (let j = 0; j < gameData.questions[i].length; j++) {
            if (gameData.questions[i][j] === question) {
                return j;
            }
        }
    }
    return -1;
}

// Function for Category 1 to show side-by-side comparison
function showSideBySideComparison(questionData, container) {
    // Create answer layout container
    const answerContainer = document.createElement('div');
    answerContainer.className = 'answer-layout';

    // Store the original question text
    const originalQuestion = document.getElementById('modal-question').textContent;

    // Left side: The correct image choice
    const leftSide = document.createElement('div');
    leftSide.className = 'correct-image-container';

    // Find the correct image from the choices
    let correctImageSrc = questionData.images[questionData.correctImageIndex];

    // Create and add the correct image
    const correctImageLabel = document.createElement('p');
    correctImageLabel.textContent = 'Правильный выбор:';

    const correctImage = document.createElement('img');
    correctImage.src = correctImageSrc;
    correctImage.alt = "Правильный выбор";
    correctImage.className = 'answer-image';

    leftSide.appendChild(correctImageLabel);
    leftSide.appendChild(correctImage);

    // Right side: The original reference image
    const rightSide = document.createElement('div');
    rightSide.className = 'reference-image-container';

    if (questionData.answerImage) {
        const originalImageLabel = document.createElement('p');
        originalImageLabel.textContent = 'Оригинал:';

        const originalImage = document.createElement('img');
        originalImage.src = questionData.answerImage;
        originalImage.alt = "Оригинальное изображение";
        originalImage.className = 'answer-image';

        rightSide.appendChild(originalImageLabel);
        rightSide.appendChild(originalImage);
    }

    // Add both sides to the answer container
    answerContainer.appendChild(leftSide);
    answerContainer.appendChild(rightSide);

    // Replace the container content with our answer
    container.innerHTML = '';
    container.appendChild(answerContainer);

    // Update the question to indicate we're showing the answer
    document.getElementById('modal-question').textContent = `${originalQuestion} - Ответ:`;
}

// Function to show only the answer image without showing choices
function showOnlyAnswerImage(questionData, container) {
    // Create wrapper for the answer
    const answerWrapper = document.createElement('div');
    answerWrapper.className = 'answer-image-wrapper';

    // Get the answer image source
    let imageSrc = null;

    if (questionData.answerImage) {
        // If we have a dedicated answer image, use it
        imageSrc = questionData.answerImage;
    } else if (questionData.type === 'image_choice' && questionData.correctImageIndex !== undefined) {
        // If no answer image but it's an image choice question, use the correct image from choices
        imageSrc = questionData.images[questionData.correctImageIndex];
    } else if (questionData.type === 'multiple_choice_image_answer') {
        // For multiple choice with image answer
        imageSrc = questionData.answerImage;
    }

    // Create and add the image if we have a source
    if (imageSrc) {
        const answerImage = document.createElement('img');
        answerImage.src = imageSrc;
        answerImage.alt = "Ответ";
        answerImage.className = 'answer-image full-size';

        answerWrapper.appendChild(answerImage);
    }

    // Add text answer if available
    if (questionData.answer && questionData.answer !== "-") {
        const textAnswer = document.createElement('div');
        textAnswer.className = 'text-answer';
        textAnswer.textContent = questionData.answer;

        answerWrapper.appendChild(textAnswer);
    }

    // If container is the content container, replace its contents
    if (container === document.getElementById('modal-content-container')) {
        container.innerHTML = '';
        container.appendChild(answerWrapper);

        // Update the question text
        const originalQuestion = document.getElementById('modal-question').textContent;
        document.getElementById('modal-question').textContent = `${originalQuestion} - Ответ:`;
    } else {
        // Otherwise just append to the container
        container.appendChild(answerWrapper);
    }
}

//==============================================
// PART 5: ANSWER CONTENT CREATION
//==============================================

function createTextImageAnswer(questionData, container) {
    const answerImage = document.createElement('img');
    answerImage.src = questionData.answerImage;
    answerImage.alt = questionData.answer;
    answerImage.className = 'answer-image';

    container.appendChild(answerImage);

    // Add text answer
    const textAnswer = document.createElement('div');
    textAnswer.textContent = questionData.answer;
    textAnswer.className = 'text-answer';
    container.appendChild(textAnswer);
}

function createImageChoiceAnswer(questionData, container) {
    // Create a container for displaying the answer layout with two columns
    const answerContainer = document.createElement('div');
    answerContainer.className = 'answer-layout';
    answerContainer.style.display = 'grid';
    answerContainer.style.gridTemplateColumns = '1fr 1fr';
    answerContainer.style.gap = '20px';
    answerContainer.style.width = '100%';
    answerContainer.style.alignItems = 'center';

    // Left side: The correct image choice
    const leftSide = document.createElement('div');
    leftSide.className = 'correct-image-container';
    leftSide.style.display = 'flex';
    leftSide.style.flexDirection = 'column';
    leftSide.style.alignItems = 'center';

    // Find the correct image from the choices
    const imageChoices = document.querySelectorAll('.image-choice');
    let correctImageSrc = null;

    imageChoices.forEach((choice, index) => {
        if (index === questionData.correctImageIndex) {
            choice.classList.add('correct');
            // Get the src of the correct image
            correctImageSrc = choice.querySelector('img').src;
        } else if (choice.classList.contains('selected')) {
            choice.classList.add('incorrect');
        }
    });

    // Create and add the correct image
    if (correctImageSrc) {
        const correctImageLabel = document.createElement('p');
        correctImageLabel.textContent = 'Правильный выбор:';
        correctImageLabel.style.fontSize = '18px';
        correctImageLabel.style.marginBottom = '10px';

        const correctImage = document.createElement('img');
        correctImage.src = correctImageSrc;
        correctImage.alt = "Правильный выбор";
        correctImage.className = 'answer-image';
        correctImage.style.maxHeight = '200px';

        leftSide.appendChild(correctImageLabel);
        leftSide.appendChild(correctImage);
    }

    // Right side: The original reference image
    const rightSide = document.createElement('div');
    rightSide.className = 'reference-image-container';
    rightSide.style.display = 'flex';
    rightSide.style.flexDirection = 'column';
    rightSide.style.alignItems = 'center';

    if (questionData.answerImage) {
        const originalImageLabel = document.createElement('p');
        originalImageLabel.textContent = 'Оригинал:';
        originalImageLabel.style.fontSize = '18px';
        originalImageLabel.style.marginBottom = '10px';

        const originalImage = document.createElement('img');
        originalImage.src = questionData.answerImage;
        originalImage.alt = "Оригинальное изображение";
        originalImage.className = 'answer-image';
        originalImage.style.maxHeight = '200px';

        rightSide.appendChild(originalImageLabel);
        rightSide.appendChild(originalImage);
    }

    // Add both sides to the answer container
    answerContainer.appendChild(leftSide);
    answerContainer.appendChild(rightSide);

    // Add the answer text if it exists
    if (questionData.answer && questionData.answer !== "-") {
        const textAnswerDiv = document.createElement('div');
        textAnswerDiv.textContent = questionData.answer;
        textAnswerDiv.className = 'text-answer';
        textAnswerDiv.style.gridColumn = '1 / span 2';
        textAnswerDiv.style.marginTop = '20px';

        answerContainer.appendChild(textAnswerDiv);
    }

    // Add the answer container to the main container
    container.appendChild(answerContainer);

    // Add responsive design for mobile
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    if (mediaQuery.matches) {
        answerContainer.style.gridTemplateColumns = '1fr';
        const textAnswerDiv = container.querySelector('.text-answer');
        if (textAnswerDiv) {
            textAnswerDiv.style.gridColumn = '1';
        }
    }
}

function createMultipleChoiceAnswer(questionData, container) {
    const optionButtons = document.querySelectorAll('.option-button');

    optionButtons.forEach((button, index) => {
        if (index === questionData.correctOptionIndex) {
            button.classList.add('correct');
        } else if (button.classList.contains('selected')) {
            button.classList.add('incorrect');
        }
    });

    // Image answer
    const answerImg = document.createElement('img');
    answerImg.src = questionData.answerImage;
    answerImg.alt = questionData.answer;
    answerImg.className = 'answer-image';
    container.appendChild(answerImg);

    // Text answer
    const answerText = document.createElement('div');
    answerText.textContent = questionData.answer;
    answerText.className = 'text-answer';
    container.appendChild(answerText);
}

function createAudioAnswer(questionData, container) {
    // Text answer
    const audioTextAnswer = document.createElement('div');
    audioTextAnswer.textContent = questionData.answer;
    audioTextAnswer.className = 'text-answer';

    // Audio player with full version/answer
    const answerAudio = document.createElement('audio');
    answerAudio.controls = true;
    answerAudio.src = questionData.answerAudio || questionData.audioSrc;
    answerAudio.className = 'answer-audio';

    container.appendChild(audioTextAnswer);
    container.appendChild(answerAudio);
}

//==============================================
// PART 6: TEAM MANAGEMENT
//==============================================

//==============================================
// PART 6: TEAM MANAGEMENT
//==============================================

function initScoreBoard() {
    const scoreBoard = document.querySelector('.score-board');
    scoreBoard.innerHTML = '';

    // Create blocks for each team
    teams.forEach((team, index) => {
        const teamBlock = document.createElement('div');
        teamBlock.className = 'team';

        const teamName = document.createElement('div');
        teamName.className = 'team-name';
        teamName.textContent = team.name;

        // Handler for changing team name
        teamName.onclick = function () {
            const newName = prompt('Введите новое название команды:', team.name);
            if (newName !== null && newName.trim() !== '') {
                teams[index].name = newName.trim();

                // Save the game state after changing the team name
                saveGameState();

                initScoreBoard();
            }
        };

        const teamScore = document.createElement('div');
        teamScore.className = 'team-score';
        teamScore.id = `team${index + 1}-score`;
        teamScore.textContent = team.score;

        const scoreControls = document.createElement('div');
        scoreControls.className = 'score-controls';
        scoreControls.id = `team${index + 1}-controls`;

        const plusBtn = document.createElement('button');
        plusBtn.className = 'score-btn';
        plusBtn.textContent = '+100';
        plusBtn.onclick = function () { adjustScore(index, 100); };

        const minusBtn = document.createElement('button');
        minusBtn.className = 'score-btn';
        minusBtn.textContent = '-100';
        minusBtn.onclick = function () { adjustScore(index, -100); };

        scoreControls.appendChild(plusBtn);
        scoreControls.appendChild(minusBtn);

        if (teams.length > 2) {
            const removeBtn = document.createElement('button');
            removeBtn.className = 'score-btn remove-team-btn';
            removeBtn.textContent = 'Удалить';
            removeBtn.onclick = function () { removeTeam(index); };
            scoreControls.appendChild(removeBtn);
        }

        teamBlock.appendChild(teamName);
        teamBlock.appendChild(teamScore);
        teamBlock.appendChild(scoreControls);
        scoreBoard.appendChild(teamBlock);
    });

    // Add button for adding a new team
    const addTeamBlock = document.createElement('div');
    addTeamBlock.className = 'add-team-container';

    const addTeamButton = document.createElement('button');
    addTeamButton.className = 'add-team-btn';
    addTeamButton.id = 'add-team-btn';
    addTeamButton.textContent = '+ Добавить команду';

    addTeamBlock.appendChild(addTeamButton);
    scoreBoard.appendChild(addTeamBlock);
}

function addNewTeam() {
    const newTeamName = prompt('Введите название новой команды:');
    if (newTeamName !== null && newTeamName.trim() !== '') {
        teams.push({ name: newTeamName.trim(), score: 0 });

        // Save the game state
        saveGameState();

        initScoreBoard();
    }
}

function removeTeam(teamIndex) {
    if (confirm(`Вы уверены, что хотите удалить команду "${teams[teamIndex].name}"?`)) {
        teams.splice(teamIndex, 1);

        // Save the game state
        saveGameState();

        initScoreBoard();
    }
}

function adjustScore(teamIndex, points) {
    teams[teamIndex].score += points;
    document.getElementById(`team${teamIndex + 1}-score`).textContent = teams[teamIndex].score;

    // Save the game state
    saveGameState();
}

//==============================================
// PART 7: EDIT MODE
//==============================================

function toggleEditMode() {
    editMode = !editMode;
    document.getElementById('edit-mode-btn').textContent = editMode ? 'Выйти из режима редактирования' : 'Режим редактирования';
    document.getElementById('edit-mode-indicator').style.display = editMode ? 'inline' : 'none';

    initBoard();
}

function editCategory(categoryIndex) {
    const newName = prompt('Введите новое название категории:', gameData.categories[categoryIndex]);
    if (newName !== null && newName.trim() !== '') {
        gameData.categories[categoryIndex] = newName.trim();

        // Save the game state
        saveGameState();

        initBoard();
    }
}

function editQuestion(category, price) {
    const questionData = gameData.questions[category][price];

    document.getElementById('edit-modal').style.display = 'block';

    document.getElementById('edit-question').value = questionData.question;
    document.getElementById('edit-answer').value = questionData.answer || '';
    document.getElementById('edit-price').value = questionData.price;
    document.getElementById('edit-type').value = questionData.type;

    handleQuestionTypeChange();

    if (questionData.answerImage) {
        document.getElementById('edit-answer-image').value = questionData.answerImage;
    } else {
        document.getElementById('edit-answer-image').value = '';
    }

    const imageUrlsContainer = document.getElementById('edit-image-urls');
    imageUrlsContainer.innerHTML = '';

    if (questionData.images && questionData.images.length > 0) {
        questionData.images.forEach((url, index) => {
            addImageUrlField(url, index);
        });
    } else if (questionData.type.includes('image') && !questionData.type.includes('image_answer')) {
        addImageUrlField('', 0);
        addImageUrlField('', 1);
    }

    // Fill in the correct image index field
    if (questionData.correctImageIndex !== undefined) {
        document.getElementById('edit-correct-image').value = questionData.correctImageIndex;
    }

    // Fill in fields for audio questions
    if (questionData.type === 'audio_question') {
        document.getElementById('edit-audio-src').value = questionData.audioSrc || '';
        document.getElementById('edit-answer-audio').value = questionData.answerAudio || '';
    }

    // Fill in fields for questions with options
    if (questionData.type === 'multiple_choice_image_answer') {
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        // Get options or create empty ones
        const options = questionData.options || ['', '', '', ''];

        options.forEach((option, index) => {
            const optionGroup = document.createElement('div');
            optionGroup.className = 'option-group';

            const optionLabel = document.createElement('label');
            optionLabel.textContent = `Вариант ${index + 1}:`;

            const optionInput = document.createElement('input');
            optionInput.type = 'text';
            optionInput.className = 'option-input';
            optionInput.dataset.index = index;
            optionInput.value = option;

            optionGroup.appendChild(optionLabel);
            optionGroup.appendChild(optionInput);
            optionsContainer.appendChild(optionGroup);
        });

        // Fill in correct option index
        document.getElementById('edit-correct-option').value =
            questionData.correctOptionIndex !== undefined ? questionData.correctOptionIndex : 0;
    }

    // Save reference to edited question
    document.getElementById('save-edit-btn').onclick = function () {
        saveQuestionEdit(category, price);
    };
}

function handleQuestionTypeChange() {
    const type = document.getElementById('edit-type').value;

    document.getElementById('edit-image-block').style.display =
        (type.includes('image') && !type.includes('image_answer')) ? 'block' : 'none';

    document.getElementById('edit-correct-image-block').style.display =
        type === 'image_choice' ? 'block' : 'none';

    document.getElementById('edit-image-answer-block').style.display =
        (type === 'text_image_answer' || type === 'multiple_choice_image_answer' ||
            type === 'image_choice') ? 'block' : 'none';

    document.getElementById('edit-audio-block').style.display =
        type === 'audio_question' ? 'block' : 'none';

    document.getElementById('edit-multiple-choice-block').style.display =
        type === 'multiple_choice_image_answer' ? 'block' : 'none';

    // If type changed to one with images, add fields for URLs
    const imageUrlsContainer = document.getElementById('edit-image-urls');
    if ((type.includes('image') && !type.includes('image_answer')) && imageUrlsContainer.children.length === 0) {
        addImageUrlField('', 0);
        addImageUrlField('', 1);
    }

    // Create or update fields for options
    if (type === 'multiple_choice_image_answer') {
        const optionsContainer = document.getElementById('options-container');
        if (optionsContainer.children.length === 0) {
            for (let i = 0; i < 4; i++) {
                const optionGroup = document.createElement('div');
                optionGroup.className = 'option-group';

                const optionLabel = document.createElement('label');
                optionLabel.textContent = `Вариант ${i + 1}:`;

                const optionInput = document.createElement('input');
                optionInput.type = 'text';
                optionInput.className = 'option-input';
                optionInput.dataset.index = i;
                optionInput.value = '';

                optionGroup.appendChild(optionLabel);
                optionGroup.appendChild(optionInput);
                optionsContainer.appendChild(optionGroup);
            }
        }
    }
}

function addImageUrlField(url, index) {
    const imageUrlsContainer = document.getElementById('edit-image-urls');
    const field = document.createElement('div');
    field.className = 'edit-image-field';

    const label = document.createElement('label');
    label.textContent = `Изображение ${index + 1}:`;

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'edit-image-url';
    input.value = url;

    field.appendChild(label);
    field.appendChild(input);
    imageUrlsContainer.appendChild(field);
}

function addNewImageField() {
    const imageUrlsContainer = document.getElementById('edit-image-urls');
    addImageUrlField('', imageUrlsContainer.children.length);
}

//==============================================
// PART 8: SAVING EDITED QUESTIONS
//==============================================

function saveQuestionEdit(category, price) {
    const questionData = gameData.questions[category][price];

    const newQuestion = document.getElementById('edit-question').value.trim();
    const newAnswer = document.getElementById('edit-answer').value.trim();
    const newPrice = parseInt(document.getElementById('edit-price').value);
    const newType = document.getElementById('edit-type').value;

    if (!newQuestion || !newAnswer || isNaN(newPrice)) {
        alert('Пожалуйста, заполните все обязательные поля.');
        return;
    }

    questionData.question = newQuestion;
    questionData.answer = newAnswer;
    questionData.price = newPrice;
    questionData.type = newType;

    switch (newType) {
        case 'multiple_choice_image_answer':
            const optionInputs = document.querySelectorAll('.option-input');
            const options = Array.from(optionInputs).map(input => input.value.trim());

            if (options.some(option => option === '')) {
                alert('Пожалуйста, заполните все варианты ответов.');
                return;
            }

            const correctOptionIndex = parseInt(document.getElementById('edit-correct-option').value);
            if (isNaN(correctOptionIndex) || correctOptionIndex < 0 || correctOptionIndex >= options.length) {
                alert('Неверный индекс правильного варианта.');
                return;
            }

            const answerImage = document.getElementById('edit-answer-image').value.trim();
            if (!answerImage) {
                alert('Для вопроса с ответом-картинкой нужно указать URL изображения.');
                return;
            }

            questionData.options = options;
            questionData.correctOptionIndex = correctOptionIndex;
            questionData.answerImage = answerImage;

            // Remove properties not of this type
            delete questionData.images;
            delete questionData.correctImageIndex;
            delete questionData.audioSrc;
            delete questionData.answerAudio;
            break;

        case 'text_image_answer':
            // Get URL for answer image
            const imgAnswer = document.getElementById('edit-answer-image').value.trim();
            if (!imgAnswer) {
                alert('Для вопроса с ответом-картинкой нужно указать URL изображения.');
                return;
            }
            questionData.answerImage = imgAnswer;

            // Remove properties not of this type
            delete questionData.images;
            delete questionData.correctImageIndex;
            delete questionData.audioSrc;
            delete questionData.answerAudio;
            delete questionData.options;
            delete questionData.correctOptionIndex;
            break;

        case 'audio_question':
            const audioSrc = document.getElementById('edit-audio-src').value.trim();
            const answerAudio = document.getElementById('edit-answer-audio').value.trim();

            if (!audioSrc) {
                alert('Для аудио-вопроса нужно указать URL аудио.');
                return;
            }

            questionData.audioSrc = audioSrc;
            questionData.answerAudio = answerAudio;

            // Remove properties not of this type
            delete questionData.images;
            delete questionData.correctImageIndex;
            delete questionData.answerImage;
            delete questionData.options;
            delete questionData.correctOptionIndex;
            break;

        case 'image_choice':
            const imageInputs = document.querySelectorAll('.edit-image-url');
            const images = Array.from(imageInputs).map(input => input.value.trim()).filter(url => url !== '');

            if (images.length === 0) {
                alert('Для вопроса с изображениями нужно указать хотя бы одно изображение.');
                return;
            }

            questionData.images = images;

            const correctIndex = parseInt(document.getElementById('edit-correct-image').value);
            if (isNaN(correctIndex) || correctIndex < 0 || correctIndex >= images.length) {
                alert('Пожалуйста, выберите правильное изображение из доступных.');
                return;
            }
            questionData.correctImageIndex = correctIndex;

            // Process additional image for answer (if any)
            const additionalImage = document.getElementById('edit-answer-image').value.trim();
            if (additionalImage) {
                questionData.answerImage = additionalImage;
            } else {
                delete questionData.answerImage;
            }

            // Remove properties not of this type
            delete questionData.audioSrc;
            delete questionData.answerAudio;
            delete questionData.options;
            delete questionData.correctOptionIndex;
            break;

        case 'image_choice_open':
        case 'open':
            if (newType.includes('image')) {
                const openImageInputs = document.querySelectorAll('.edit-image-url');
                const openImages = Array.from(openImageInputs).map(input => input.value.trim()).filter(url => url !== '');

                if (openImages.length === 0) {
                    alert('Для вопроса с изображениями нужно указать хотя бы одно изображение.');
                    return;
                }

                questionData.images = openImages;
            } else {
                delete questionData.images;
            }

            delete questionData.correctImageIndex;
            delete questionData.answerImage;
            delete questionData.audioSrc;
            delete questionData.answerAudio;
            delete questionData.options;
            delete questionData.correctOptionIndex;
            break;

        default: // text
            // Remove all properties except basic ones
            delete questionData.images;
            delete questionData.correctImageIndex;
            delete questionData.answerImage;
            delete questionData.audioSrc;
            delete questionData.answerAudio;
            delete questionData.options;
            delete questionData.correctOptionIndex;
            break;
    }

    // Save game state after editing
    saveGameState();

    // Close modal and update game board
    document.getElementById('edit-modal').style.display = 'none';
    initBoard();
}







// Add this code to make sure the reset button works

// Make sure this code runs after the page has loaded
document.addEventListener('DOMContentLoaded', function () {
    // Add direct event listener to the reset button
    const resetButton = document.getElementById('reset-btn');
    if (resetButton) {
        resetButton.addEventListener('click', function () {
            resetGameState();
        });
    } else {
        console.error('Reset button not found in the document');
    }
});

// Reset game state function - make sure this exists in your code
function resetGameState() {
    if (confirm('Вы уверены, что хотите начать игру сначала? Это сбросит все вопросы и счет команд.')) {
        // Reset all questions to not asked
        for (let category = 0; category < gameData.questions.length; category++) {
            for (let price = 0; price < gameData.questions[category].length; price++) {
                if (gameData.questions[category][price]) {
                    gameData.questions[category][price].asked = false;
                }
            }
        }

        // Reset all team scores to 0
        teams.forEach(team => {
            team.score = 0;
        });

        // Save the reset state
        saveGameState();

        // Update the UI
        initBoard();
        initScoreBoard();

        alert('Игра сброшена!');
    }
}