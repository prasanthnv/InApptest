import { Section } from './section.model';

export interface SectionResponse{
    status: string;
    copyright: string;
    num_results: string;
    results: Array<Section>
}