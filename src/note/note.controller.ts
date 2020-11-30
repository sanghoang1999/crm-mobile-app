import { Controller, Get, UseGuards, Query, Post, Body, ValidationPipe, Put, Delete } from '@nestjs/common';
import { ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AdminGuard } from '../guards/admin.guard';
import { NoteService } from './note.service';
import { AddNoteDto } from './dto/add-note.dto';

@ApiTags('Note')
@Controller('note')
export class NoteController {
  constructor(
    private noteService:NoteService
  ){

  } @Get('/list-note')
  
  @UseGuards(AdminGuard)
  getNotes(
  ) {
    return this.noteService.getNotes()
  }

  @Get('')
  @UseGuards(AdminGuard)
  getNoteById(
    @Query('id') id: string
  ) {
    return this.noteService.getNoteById(id)
  }

  @Post('')
  @UseGuards(AdminGuard)
  addNote(
    @Body(ValidationPipe) addNoteDto:AddNoteDto
  ) {
    return this.noteService.addNote(addNoteDto)
  }

  @Put('')
  @UseGuards(AdminGuard)
  updateNote(
    @Body(ValidationPipe) addNoteDto:AddNoteDto,
    @Query('id') id:string
  ) {
    return this.noteService.updateNote(id,addNoteDto)
  }

  @Delete('')
  @UseGuards(AdminGuard)
  deleteNote(
    @Query('id') id:string
  ) {
    return this.noteService.deleteNote(id)
  }
}
