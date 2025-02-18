from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlmodel import Session, create_engine, select
from data_types import Page, TitleType, TextType
from urllib.parse import unquote


sqlite_file_name = "vocaloid-lyrics-wiki.db"
sqlite_url = f"sqlite:///{sqlite_file_name}"

engine = create_engine(sqlite_url)


app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",  # vite server
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def hello_world():
    return {"text": "Hello World"}


@app.get("/title/{titleId}")
def get_title(titleId: str):
    with Session(engine) as session:
        titleId_statement = select(TitleType).where(
            TitleType.titleType == TextType[titleId].name
        )
        titleId_result = session.exec(titleId_statement).first()

        statement = (
            select(Page)
            .where(Page.titleTypeId == titleId_result.id)
            .order_by(Page.pageTitle)
        )
        result = session.exec(statement)
        pages = result.all()
        return {"pages": pages}
    # return {"text": titleId}


@app.get("/song/{songTitle}")
def get_song(songTitle: str):
    with Session(engine) as session:
        songTitle_parsed = unquote(songTitle)
        statement = select(Page).where(Page.pageTitle == songTitle_parsed)
        result = session.exec(statement).first()
        # print(result.lyrics)
        # print(result.songs)
        lyrics = []
        for lyrics_obj in result.lyrics:
            lyrics.append(lyrics_obj.lyrics.split("\n"))

        songs = []
        for songs_obj in result.songs:
            obj = {}
            for key, value in songs_obj.__dict__.items():
                if key not in ["id", "page_id"]:
                    obj[key] = value

            songs.append(obj)

        return {"page": result, "lyrics": lyrics, "songs": songs}
