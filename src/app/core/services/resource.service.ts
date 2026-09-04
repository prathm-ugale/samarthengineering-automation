import { Injectable } from '@angular/core';
import { IndustrialResource } from '../models/resource.model';
import { RESOURCES_DATA } from '../data/resources.data';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private resources: IndustrialResource[] = RESOURCES_DATA;

  getAllResources(): IndustrialResource[] {
    return [...this.resources];
  }

  getResourcesByType(type: string): IndustrialResource[] {
    if (!type || type === 'all') return this.getAllResources();
    return this.resources.filter(r => r.type === type);
  }
}
