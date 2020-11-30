import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NoteEntity } from './note.entity';
import { Repository } from 'typeorm';
import { AddNoteDto } from './dto/add-note.dto';

@Injectable()
export class NoteService {
  constructor(
    @InjectRepository(NoteEntity)
    private noteRepository: Repository<NoteEntity>
  ){}
  async getNotes() {
    const notes = await this.noteRepository.find({})
    return notes
  }
  async addNote(addNoteDto:AddNoteDto) {
    const newNote = await this.noteRepository.create(addNoteDto)
    await this.noteRepository.save(newNote);
    return newNote

  }
  async updateNote(id:string,addNoteDto:AddNoteDto) {
    const note = await this.noteRepository.findOne(id)
    if(!note) {
      throw new  NotFoundException('Note not found')
    }

    const newData = await this.noteRepository.save({
      id:note.id,
      ...addNoteDto
    })
    return newData 

  }
  async getNoteById(id:string) {
    const note = await this.noteRepository.findOne(id)
    if(!note) {
      throw new  NotFoundException('Note not found')
    }
    return note
  }

  async deleteNote(id:string) {
    const row = await this.noteRepository.delete(id);
    if(row.affected === 0) {
      throw new NotFoundException('Note not found')
    }
    return ({message:'Delete successfully'})
  }
}
