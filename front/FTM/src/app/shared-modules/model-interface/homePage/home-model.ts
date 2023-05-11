import { Company } from "./company";
import { Training } from "./training";
import { TrainingImportance } from "./training-importance";
import { TrainingRequirement } from "./training-req";

export interface Home{
    trainingDtos:Training,
    trainingImportanceDtos:TrainingImportance,
    companyDtos:Company,
    trainingRequirementDtos:TrainingRequirement
}