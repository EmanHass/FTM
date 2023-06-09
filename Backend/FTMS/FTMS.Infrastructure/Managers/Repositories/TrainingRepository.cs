﻿using AutoMapper;
using FTMS.Core.DTOS.Training;
using FTMS.Data.DataLayer;
using FTMS.Data.Model;
using FTMS.Infrastructure.HelperServices.ImageHelper;
using FTMS.Infrastructure.Managers.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace FTMS.Infrastructure.Managers.Repositories
{
    public class TrainingRepository : ITrainingRepository
    {
        private readonly FTMSDbContext _context;
        private readonly IMapper _mapper;
        private readonly IImageService _imageService;
        private readonly IHttpContextAccessor _httpContextAccessor;
        public TrainingRepository(FTMSDbContext context,
            IMapper mapper,
            IImageService imageService,
            IHttpContextAccessor httpContextAccessor)
        {
            _context = context;
            _mapper = mapper;
            _imageService = imageService;
            _httpContextAccessor = httpContextAccessor;
        }


        public async Task<List<TrainingDto>> GetTraining()
        {
            var training = await _context.FieldTrainings.ToListAsync();
            return _mapper.Map<List<TrainingDto>>(training);

        }


        public async Task<FieldTraining> Add(CreateTrainingDto trainingDto)
        {

            var training = _mapper.Map<FieldTraining>(trainingDto);
            if (trainingDto.Image != null)
            {
                training.Image = await _imageService.SaveImage(trainingDto.Image, "Images");
            }
            await _context.FieldTrainings.AddAsync(training);
            await _context.SaveChangesAsync();
            return training;
        }

        public async Task<FieldTraining> Update(UpdateTrainingDto updateTraining)
        {
            var training = await _context.FieldTrainings.FindAsync(updateTraining.Id);
            _mapper.Map(updateTraining, training);
            if (updateTraining.NewImage != null)
            {
                training.Image = await _imageService.SaveImage(updateTraining.NewImage, "Images");
            }
            await _context.SaveChangesAsync();
            return training;

        }

        public async Task<bool> Delete(int id)
        {
            var training = await _context.FieldTrainings.FindAsync(id);
            if (training == null)
                return false;
            else
            {
                _context.FieldTrainings.Remove(training);
                await _context.SaveChangesAsync();
                return true;
            }
        }


    }
}
