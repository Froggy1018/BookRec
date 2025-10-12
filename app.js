const bookDatabase = {
    // Series
    "Percy Jackson and the Olympians": {
        title: "Percy Jackson and the Olympians",
        type: "series",
        genres: ["fantasy", "adventure", "mythology"],
        length: "medium",
        complexity: "fast-paced-plots",
        targetAge: "young-adult",
        description: "Young adult fantasy series about a demigod navigating Greek mythology in modern times",
        page: "pjo.html",
        books: 5,
        author: "Rick Riordan"
    },
    "Heroes of Olympus": {
        title: "Heroes of Olympus",
        type: "series", 
        genres: ["fantasy", "adventure", "mythology"],
        length: "long",
        complexity: "complex-characters",
        targetAge: "young-adult",
        description: "Sequel series to Percy Jackson featuring Roman and Greek demigods",
        page: "hoo.html",
        books: 5,
        author: "Rick Riordan"
    },
    "Trials of Apollo": {
        title: "Trials of Apollo",
        type: "series",
        genres: ["fantasy", "adventure", "mythology"],
        length: "medium",
        complexity: "fast-paced-plots", 
        targetAge: "young-adult",
        description: "Apollo's journey as a mortal teenager in the modern world",
        page: "toa.html",
        books: 5,
        author: "Rick Riordan"
    },
    "Divergent": {
        title: "Divergent",
        type: "series",
        genres: ["sci-fi", "dystopian", "romance"],
        length: "medium",
        complexity: "fast-paced-plots",
        targetAge: "young-adult", 
        description: "Dystopian society divided into factions based on personality traits",
        page: "divergent.html",
        books: 3,
        author: "Veronica Roth"
    },
    "Carve the Mark": {
        title: "Carve the Mark",
        type: "series",
        genres: ["sci-fi", "fantasy", "romance"],
        length: "long",
        complexity: "complex-characters",
        targetAge: "young-adult",
        description: "Sci-fi fantasy with unique magic system and complex relationships",
        page: "ctm.html", 
        books: 2,
        author: "Veronica Roth"
    },
    "Shatter Me": {
        title: "Shatter Me",
        type: "series",
        genres: ["dystopian", "romance", "sci-fi"],
        length: "medium",
        complexity: "complex-characters",
        targetAge: "young-adult",
        description: "Dystopian romance with supernatural abilities",
        page: "shatterme.html",
        books: 6,
        author: "Tahereh Mafi"
    },
    "Caraval": {
        title: "Caraval", 
        type: "series",
        genres: ["fantasy", "romance", "mystery"],
        length: "medium",
        complexity: "complex-characters",
        targetAge: "young-adult",
        description: "Magical circus setting with intricate plot and romance",
        page: "caraval.html",
        books: 3,
        author: "Stephanie Meyer"
    },
    "Once Upon a Broken Heart": {
        title: "Once Upon a Broken Heart",
        type: "series",
        genres: ["fantasy", "romance"],
        length: "medium", 
        complexity: "complex-characters",
        targetAge: "young-adult",
        description: "Fantasy romance with curses, magic, and complex relationships",
        page: "ouabh.html",
        books: 3,
        author: "Stephanie Meyer"
    },
    "The Land of Stories": {
        title: "The Land of Stories",
        type: "series",
        genres: ["fantasy", "adventure", "young-adult"],
        length: "medium",
        complexity: "complex-characters",
        targetAge: "young-adult",
        description: "Fantasy series about twins entering a magical world of fairy tales",
        page: "the_land_of_stories.html",
        books: 6,
        author: "Chris Colfer"
    },
    "Red Queen": {
        title: "Red Queen",
        type: "series",
        genres: ["fantasy", "adventure", "young-adult"],
        length: "medium",
        complexity: "simple-characters",
        targetAge: "young-adult",
        description: "FMC must pretend to be a Silver while secretly helping the Red Guard, a resistance group, to undermine the Silver regime.",
        page: "RedQueen.html",
        books: 4,
        author: "Victoria Aveyard"
    },
    // Standalones
    "Animal Farm": {
        title: "Animal Farm",
        type: "standalone",
        genres: ["political", "allegory", "classic"],
        length: "short",
        complexity: "complex-characters",
        targetAge: "adult",
        description: "Allegorical novella about farm animals and political systems",
        page: "animalfarm.html",
        books: 1,
        author: "George Orwell"
    },
    "1984": {
        title: "1984", 
        type: "standalone",
        genres: ["dystopian", "political", "classic"],
        length: "medium",
        complexity: "complex-characters",
        targetAge: "adult",
        description: "Dystopian novel about totalitarian surveillance state",
        page: "1984.html",
        books: 1,
        author: "George Orwell"
    },
    "Fahrenheit 451": {
        title: "Fahrenheit 451",
        type: "standalone", 
        genres: ["dystopian", "sci-fi", "classic"],
        length: "short",
        complexity: "complex-characters",
        targetAge: "adult",
        description: "Dystopian novel about censorship and book burning",
        page: "farenheit451.html",
        books: 1,
        author: "Ray Bradbury"
    },
    "The Da Vinci Code": {
        title: "The Da Vinci Code",
        type: "standalone",
        genres: ["mystery", "thriller", "historical"],
        length: "medium",
        complexity: "complex-characters",
        targetAge: "adult",
        description: "A thrilling mystery involving art, history, and religion.",
        page: "davincicode.html",
        books: 1,
        author: "Dan Brown"
    },
    "You've Reached Sam": {
        title: "You've Reached Sam",
        type: "standalone",
        genres: ["contemporary", "romance", "young-adult"],
        length: "medium",
        complexity: "complex-characters",
        targetAge: "adult",
        description: "A heartwarming story about love, loss, and moving on.",
        page: "youve_reached_sam.html",
        books: 1,
        author: "Dustin Thao"
    },
    "Nightworlds": {
        title: "Nightworlds",
        type: "standalone",
        genres: ["horror", "fantasy", "short-stories"],
        length: "short",
        complexity: "complex-characters",
        targetAge: "adult",
        description: "Collects the renowned author's award-winning horror stories in one chilling volume that takes readers into a dark realm where nothing is what it seems and terror hides in the shadows.",
        page: "nightworlds.html",
        books: 1,
        author: "F. Paul Wilson"
    },
    "Favorite Greek Myths": {
        title: "Favorite Greek Myths",
        type: "standalone",
        genres: ["mythology", "children", "fantasy"],
        length: "short",
        complexity: "simple-characters",
        targetAge: "adult",
        description: "A retelling of twelve favorite Greek myths for children.",
        page: "favorite_greek_myths.html",
        books: 1,
        author: "Retold by Mary Pope Osborne, Illustrated by Troy Howell"
    },
    "Pride and Prejudice": {
        title: "Pride and Prejudice",
        type: "standalone",
        genres: ["romance", "classic", "literature"],
        length: "medium",
        complexity: "complex-characters",
        targetAge: "adult",
        description: "A romantic novel that explores the themes of love, reputation, and class in early 19th-century England.",
        page: "pride_and_prejudice.html",
        books: 1,
        author: "Jane Austen"
    },
    "To Kill a Mockingbird": {
        title: "To Kill a Mockingbird",
        type: "standalone",
        genres: ["classic", "literature"],
        length: "medium",
        complexity: "complex-characters",
        targetAge: "adult",
        description: "A novel about the serious issues of rape and racial inequality, seen through the eyes of a child.",
        page: "to_kill_a_mockingbird.html",
        books: 1,
        author: "Harper Lee"
    },
    "Room": {
        title: "Room",
        type: "standalone",
        genres: ["fiction", "literature"],
        length: "medium",
        complexity: "complex-characters",
        targetAge: "adult",
        description: "A novel about the serious issues of confinement and the bond between mother and son, seen through the eyes of a child.",
        page: "Room.html",
        books: 1,
        author: "Emma Donoghue"
    }
};

// Quiz functionality
const quizForm = {
    currentQuestion: 1,
    totalQuestions: 4,
    answers: {},
    
    // Store user answers
    storeAnswer: function(questionName, value) {
        this.answers[questionName] = value;
    },
    
    // Get user answers
    getAnswers: function() {
        return this.answers;
    }
};

// Recommendation system
const bookRecommendationSystem = {
    // Calculate compatibility score between user preferences and book
    calculateScore: function(userPrefs, book) {
        let score = 0;
        let maxScore = 0;
        
        // Genre matching (40% of total score)
        if (userPrefs.genre && userPrefs.genre.length > 0) {
            maxScore += 40;
            const genreMatches = userPrefs.genre.filter(genre => 
                book.genres.includes(genre)
            ).length;
            score += (genreMatches / userPrefs.genre.length) * 40;
        }
        
        // Type matching (25% of total score)
        maxScore += 25;
        if (userPrefs.type === book.type) {
            score += 25;
        }
        
        // Length matching (20% of total score) 
        maxScore += 20;
        if (userPrefs.length === book.length) {
            score += 20;
        }
        
        // Complexity/preference matching (15% of total score)
        maxScore += 15;
        if (userPrefs.preference === book.complexity) {
            score += 15;
        }
        
        return maxScore > 0 ? (score / maxScore) * 100 : 0;
    },
    
    // Get book recommendations based on user preferences
    getRecommendations: function(userPrefs, limit = 3) {
        const books = Object.values(bookDatabase);
        const scoredBooks = books.map(book => ({
            ...book,
            score: this.calculateScore(userPrefs, book)
        }));
        
        // Sort by score (highest first) and return top results
        return scoredBooks
            .sort((a, b) => b.score - a.score)
            .slice(0, limit);
    },
    
    // Process quiz form data
    processQuizAnswers: function(formData) {
        const userPrefs = {
            genre: [],
            type: '',
            length: '',
            preference: ''
        };
        
        // Handle multiple genre selections
        if (formData.get('genre')) {
            userPrefs.genre = formData.getAll('genre');
        }
        
        userPrefs.type = formData.get('type');
        userPrefs.length = formData.get('length'); 
        userPrefs.preference = formData.get('preference');
        
        return userPrefs;
    }
};

// Interactive filtering system for index page
const bookFilter = {
    currentFilters: {
        genre: [],
        type: 'all',
        length: 'all',
        author: 'all'
    },
    
    // Apply filters and update display
    applyFilters: function() {
        const books = Object.values(bookDatabase);
        const filtered = books.filter(book => {
            // Genre filter
            if (this.currentFilters.genre.length > 0) {
                const hasMatchingGenre = this.currentFilters.genre.some(genre => 
                    book.genres.includes(genre)
                );
                if (!hasMatchingGenre) return false;
            }
            
            // Type filter
            if (this.currentFilters.type !== 'all' && book.type !== this.currentFilters.type) {
                return false;
            }
            
            // Length filter
            if (this.currentFilters.length !== 'all' && book.length !== this.currentFilters.length) {
                return false;
            }
            
            // Author filter (basic implementation)
            if (this.currentFilters.author !== 'all' && book.author !== this.currentFilters.author) {
                return false;
            }
            
            return true;
        });
        
        this.displayFilteredBooks(filtered);
        return filtered;
    },
    
    // Display filtered books
    displayFilteredBooks: function(books) {
        const container = document.getElementById('filtered-results');
        if (!container) return;
        
        container.innerHTML = '';
        
        if (books.length === 0) {
            container.innerHTML = '<p>No books match your criteria. Try adjusting your filters!</p>';
            return;
        }
        
        books.forEach(book => {
            const bookElement = document.createElement('div');
            bookElement.className = 'book-recommendation';
            bookElement.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Type:</strong> ${book.type === 'series' ? `Series (${book.books} books)` : 'Standalone'}</p>
                <p><strong>Genres:</strong> ${book.genres.join(', ')}</p>
                <p><strong>Length:</strong> ${book.length}</p>
                <p>${book.description}</p>
                <a href="${book.page}" class="book-link">Read More</a>
            `;
            container.appendChild(bookElement);
        });
    },
    
    // Update filter
    updateFilter: function(filterType, value) {
        if (filterType === 'genre') {
            const index = this.currentFilters.genre.indexOf(value);
            if (index > -1) {
                this.currentFilters.genre.splice(index, 1);
            } else {
                this.currentFilters.genre.push(value);
            }
        } else {
            this.currentFilters[filterType] = value;
        }
        this.applyFilters();
    }
};

// DOM Event Handlers and Page Initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize based on current page
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'quiz.html') {
        initializeQuiz();
    } else if (currentPage === 'index.html' || currentPage === '') {
        initializeHomePage();
    } else if (currentPage === 'results.html') {
        initializeResultsPage();
    }
});

// Quiz page initialization
function initializeQuiz() {
    const form = document.querySelector('#quizqs form');
    if (form) {
        // Prevent default form submission and handle with JavaScript
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(form);
            const userPrefs = bookRecommendationSystem.processQuizAnswers(formData);
            const recommendations = bookRecommendationSystem.getRecommendations(userPrefs);
            
            // Store results in sessionStorage and redirect
            sessionStorage.setItem('quizResults', JSON.stringify({
                preferences: userPrefs,
                recommendations: recommendations
            }));
            
            window.location.href = 'results.html';
        });
    }
}

// Home page initialization with filtering
function initializeHomePage() {
    // Add filter interface to index page
    addFilterInterface();
    
    // Initialize with all books displayed
    setTimeout(() => bookFilter.applyFilters(), 100);
}

// Results page initialization
function initializeResultsPage() {
    const results = sessionStorage.getItem('quizResults');
    if (results) {
        const data = JSON.parse(results);
        displayQuizResults(data);
    } else {
        document.body.innerHTML = `
            <div style="text-align: center; padding: 2rem;">
                <h1>No Results Found</h1>
                <p>Please take the quiz first to get personalized recommendations.</p>
                <a href="quiz.html" style="background: #A3485A; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">Take Quiz</a>
            </div>
        `;
    }
}

// Add filter interface to home page
function addFilterInterface() {
    const seriesDiv = document.getElementById('series');
    if (!seriesDiv) return;
    
    const filterHTML = `
        <div id="book-filters" style="margin: 2rem 0; padding: 1rem; border: 2px solid #A3485A; border-radius: 8px; background: #A3485A;">
            <h2>Filter Books</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                <div>
                    <h4>Genres:</h4>
                    <label><input type="checkbox" onchange="bookFilter.updateFilter('genre', 'fantasy')"> Fantasy</label><br>
                    <label><input type="checkbox" onchange="bookFilter.updateFilter('genre', 'sci-fi')"> Sci-Fi</label><br>
                    <label><input type="checkbox" onchange="bookFilter.updateFilter('genre', 'romance')"> Romance</label><br>
                    <label><input type="checkbox" onchange="bookFilter.updateFilter('genre', 'dystopian')"> Dystopian</label><br>
                    <label><input type="checkbox" onchange="bookFilter.updateFilter('genre', 'classic')"> Classic</label><br>
                </div>
                <div>
                    <h4>Type:</h4>
                    <select onchange="bookFilter.updateFilter('type', this.value)">
                        <option value="all">All</option>
                        <option value="series">Series</option>
                        <option value="standalone">Standalone</option>
                    </select>
                </div>
                <div>
                    <h4>Length:</h4>
                    <select onchange="bookFilter.updateFilter('length', this.value)">
                        <option value="all">All</option>
                        <option value="short">Short</option>
                        <option value="medium">Medium</option>
                        <option value="long">Long</option>
                    </select>
                </div>
            </div>
        </div>
        <div id="filtered-results"></div>
    `;
    
    seriesDiv.insertAdjacentHTML('beforebegin', filterHTML);
}

// Display quiz results
function displayQuizResults(data) {
    const { preferences, recommendations } = data;
    
    document.body.innerHTML = `
        <header style="text-align: center; padding: 1rem; background: #842A3B; margin: 10px; border: 5px solid #A3485A;">
            <h1>Your Book Recommendations</h1>
        </header>
        <div style="border: 5px solid #A3485A; padding: 1rem; margin: 10px; background: #842A3B;">
        <div style="background: #842A3B; margin: 10px; padding: 1rem; ">
            <h2>Your Preferences:</h2>
            <p><strong>Genres:</strong> ${preferences.genre.join(', ')}</p>
            <p><strong>Type:</strong> ${preferences.type}</p>
            <p><strong>Length:</strong> ${preferences.length}</p>
            <p><strong>Style:</strong> ${preferences.preference}</p>
        </div>
        
            <h2>Recommended Books:</h2>
        
        <div style="margin: 10px;">
            <div id="recommendations">
                ${recommendations.map((book, index) => `
                    <div style=" ; background: #842A3B; padding-bottom: 20px;">
                        <h3>${index + 1}. ${book.title} (${Math.round(book.score)}% match)</h3>
                        <p><strong>Author:</strong> ${book.author}</p>
                        <p><strong>Type:</strong> ${book.type === 'series' ? `Series (${book.books} books)` : 'Standalone'}</p>
                        <p><strong>Genres:</strong> ${book.genres.join(', ')}</p>
                        <p>${book.description}</p>
                        <a href="${book.page}" style="background: #A3485A; color: white; padding: 8px 16px; text-decoration: none; border-radius: 4px; display: inline-block; margin-top: 0.5rem; border: 2px solid #F5DAA7; color: #F5DAA7;">Read More</a>
                    </div>
                `).join('')}
            </div>
            </div>
        </div>
            <div style="text-align: center; margin: 10px; padding-top: 30px; padding: 10px 20px;">
                <a href="quiz.html" style="background: #A3485A; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; margin-right: 1rem; border: 2px solid #F5DAA7; color: #F5DAA7;">Take Quiz Again</a>
                <a href="index.html" style="background: #A3485A; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px; border: 2px solid #F5DAA7; color: #F5DAA7;">Back to Home</a>
        </div>
       
        <footer style="text-align: center; padding: 1rem; margin: 10px;">
            <p>Created by: Jieeun</p>
            <p><a href="https://github.com/Froggy1018">My Github</a> | <a href="https://www.instagram.com/jess_bob18/">My Instagram</a></p>
        </footer>
    `;
}