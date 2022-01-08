USE testDB;

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

select * from users;
create table commentboard (
	cidx int not null auto_increment PRIMARY KEY, 
    cuserid varchar(256) null,
    ccontent varchar(256) null,
    board_idx int,
    foreign key (board_idx) references userboard(bidx) 
    on update cascade on delete cascade
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

select * from commentboard;
-- drop table commentboard;
