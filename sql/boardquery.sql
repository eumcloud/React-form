USE testDB;

select * from users;

create table Boards (
	bidx int not null auto_increment PRIMARY KEY, 
    buserid varchar(256) null,
    btitle varchar(256) null,
    bcontent varchar(256) null,
    regdate varchar(256) null,
    modidate varchar(256) null,
    bhit varchar(256) null,
    blikeuser varchar(512) null
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO Boards(buserid, btitle, bcontent, regdate, modidate, bhit, blikeuser) values ('a', 'b', 'c', now(), now(), 0, 0);

select * from Boards;
-- drop table Boards;


create table Comments (
	cidx int not null auto_increment PRIMARY KEY, 
    cuserid varchar(256) null,
    ccontent varchar(256) null,
    board_idx int,
    foreign key (board_idx) references Boards(bidx) 
    on update cascade on delete cascade
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO Comments(cuserid, ccontent ) values ('a', 'b');

select * from Comments;
-- drop table Comments;
