var CANVAS_WIDTH = 1120;
var CANVAS_HEIGHT = 1400;

var EDGEBOARD_X = 170;
var EDGEBOARD_Y = 0;

var PRIMARY_FONT = "comfortaabold";

var FPS           = 30;
var FPS_TIME      = 1000/FPS;
var DISABLE_SOUND_MOBILE = false;

var SOUNDTRACK_VOLUME_IN_GAME = 0.1;

var LARGE_BONUS = 0;
var SHORT_MALUS = 1;
var SUPER_SHOT = 2;
var DOUBLE_BALLS = 3;
var CRAZY_BALL = 4;

var MIN_MS_SPAWN_POWER_UP = 10000;
var MAX_MS_SPAWN_POWER_UP = 15000;
var MS_STRONG_SHOT_POWER_UP = 6000;
var MS_CRAZY_BALL = 6000;

var MS_SPAWN_TIME_BALL_TRAJECTORY = 100;
var BALL_TRAJ_INSTANCE = 99;
var MS_TIME_FADE_BALL_TRAJ = 300;

var SUPER_SHOT_POWER = 4;

var MIN_PLAYER_FORCE_VEL = 0.1;

var BALL_SPRITE_ANIM_MULTIPLIER = 0.4;

var BALL = 2;
var LEFT_SIDE = 3;
var RIGHT_SIDE = 4;

var MIN_DIST_COLLISION_DETECT = 1000;

var BUT_LEVEL_WIDTH = 95;
var BUT_LEVEL_HEIGHT = 84;

var NUM_ROWS_PAGE_LEVEL = 1;
var NUM_COLS_PAGE_LEVEL = 3;
var NUM_LEVELS = 3;

var s_b2Players;
var s_bFriendly;
var s_bFirstPlay = true;
var s_bFirstMultiPlayer = true;

var BLUE_STICK = 0;
var RED_STICK = 1;
var PLAYER_SPEED_STICKS = 10;
var CPU_SPEED_STICKS = PLAYER_SPEED_STICKS;
var POINTS_TO_WIN;
var TIME_GOAL_ANIMATION = 1000;

var ARRAY_BALL_SPEED = new Array();
ARRAY_BALL_SPEED[0] = {start_speed: 0.6, step: 0.1, limit: 2, cpu_speed: 4};
ARRAY_BALL_SPEED[1] = {start_speed: 0.7, step: 0.1, limit: 2.8, cpu_speed:7};
ARRAY_BALL_SPEED[2] = {start_speed: 0.8, step: 0.2, limit: 3.2, cpu_speed: 10};

var ARRAY_IMG_LEVEL = new Array(); //Initialized in CMain;

var INDEX_DIFFICULT;

var ADVANCED_MODE;

var STATE_LOADING = 0;
var STATE_MENU    = 1;
var STATE_HELP    = 1;
var STATE_GAME    = 3;
var STATE_LEVEL_SELECTION = 4;

var ON_MOUSE_DOWN  = 0;
var ON_MOUSE_UP    = 1;
var ON_MOUSE_OVER  = 2;
var ON_MOUSE_OUT   = 3;
var ON_DRAG_START  = 4;
var ON_DRAG_END    = 5;

var MS_AFTER_GOAL = 1500;
var Y_OFFBOARD_MESSAGES_UP = -300;
var Y_OFFBOARD_MESSAGES_DOWN = CANVAS_HEIGHT+300;
var Y_MESSAGES_ON_BOARD_UP = 262;
var Y_MESSAGES_ON_BOARD_DOWN = CANVAS_HEIGHT/2+262;

var PLAYER_1 = 0;
var PLAYER_2 = 1;

var OCCURRENCES_LARGE_BONUS;
var OCCURRENCES_SHORT_MALUS;
var OCCURRENCES_SUPER_SHOTS;
var OCCURRENCES_DOUBLE_BALLS;
var OCCURRENCES_CRAZY_BALL;

var PHYSICS_ITERATIONS = 20;
var ANGLE_CRAZY_BALL = 20;
var STEP_UPDATE_CRAZY_BALL = 2;
var MIN_VEL_COLLISION_BALL_EDGE = 3;
var VARIABLE_VEL_COLLISION_BALL_EDGE = 1;
var START_PROGRESSIVE_BALL_VELOCITY = 1.6;
var PROGRESSIVE_STEP_BALL_VELOCITY = 0.2;
var LIMIT_SPEED = 4.5;
var MAX_ANGLE_ROOT_COLLISION_BALL_EDGE = 30;
var QUANTITY_ROOT = 0;

var BALL_START_VELOCITY = 0.5;
var STICK_ACCELLERATION = 1.5;
var STICK_FRICTION = 0.75;

//EDGES
var VERTICAL_LINE_LEFT = 0;
var VERTICAL_LINE_RIGHT = 1;
var HORIZONTAL_LINE_UP = 0;
var HORIZONTAL_LINE_DOWN = 1;

//STICKS
var GOALKEEPER = 0;
var DEFENDER = 1;
var MIDFIELDER = 2;
var STRIKER = 3;

var LOGO_MENU_FRAMES_NUM         = 33; 
var GOAL_TEXT_FRAMES_NUM         = 15;
var ENLARGE_TEXT_FRAMES_NUM      = 15;
var BECOME_SHORT_TEXT_FRAMES_NUM = 15;
var SUPER_SHOT_TEXT_FRAMES_NUM   = 15;
var DOUBLE_BALL_TEXT_FRAMES_NUM  = 15;
var CRAZY_BALL_TEXT_FRAMES_NUM   = 15;


var ENABLE_FULLSCREEN;
var ENABLE_CHECK_ORIENTATION;

var AD_SHOW_COUNTER;