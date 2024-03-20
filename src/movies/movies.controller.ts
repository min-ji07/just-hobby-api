import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// nest g c


@ApiTags('MOVIE')
@Controller('movies')
export class MoviesController {
    @Get()
    getAll(){
        return 'this will return all movies';
    }

    /// searchYear?year=2024
    @Get('/searchYear') // 48번째줄 참고
    searchYear(@Query("year") searchYear: string){
        return `year:: ${searchYear}`
    }

    @Get(':id')    // 여기와 param의 이름이 같아야함
    getOne(@Param('id') id: string){    // id 값을 id에 저장(해당 이름은 달라도 됨)
        return `this will return one movie with the id: ${id}`; // 대신 여기에는 같은 이름으로 써줘야겠지
    }

    @Post()
    create(@Body() movieData){
        console.log('값: ', movieData);
        return movieData;
    }

    @Delete(':id')
    remove(@Param('id') id: string){
        return `This will delete a movie ${id}`;
    }

    @Put(':id')    // put은 모든 것을 update, patch는 리소스의 일부분만 
    update(@Param('id') id: string){
        return `This will update a movie ${id}`;
    }

    @Patch(':id')
    patch(@Param('id') id: string, @Body() updateData){
        console.log({
            updateMovieId: id,
            ...updateData
        })
        return{
            updataMovieId: id,
            ...updateData
        }
    }

    // 위의 param id 작성시 해당 코드보다 아래에 작성된 경우
    // movies/id 와 같이 id 값으로 인식된다
    // movies/search(id값)
    // 그러므로 위로 올려줘야함
    @Get('/search')
    search(){
        return 'search';
    }
}
