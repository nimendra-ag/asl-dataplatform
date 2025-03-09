'use client';

import { useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { SlArrowDown } from "react-icons/sl";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const FilterArea = () => {
    const [selectedDate, setSelectedDate] = useState<string>('01/01/2024 - 07/01/2024'); //need to be added
    const [selectedOrganization, setSelectedOrganization] = useState<string>('AIESEC SRI LANKA');
    const [selectedProduct, setSelectedProduct] = useState<string>('Product');
    const [selectedStatus, setSelectedStatus] = useState<string>('Status');
    const [selectedProject, setSelectedProject] = useState<string>('Project');
    const [selectedHomeMC, setSelectedHomeMC] = useState<string>('Home MC');
    const [selectedHomeLC, setSelectedHomeLC] = useState<string>('Home LC');
    const [selectedDuration, setSelectedDuration] = useState<string>('Duration');

    return (
        <div className='flex items-center justify-center mt-5'>
            <div className="flex items-center justify-center space-x-2 p-3 rounded-lg bg-white shadow-md overflow-x-auto w-[1300px]">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" aria-label="Select Organization">
                            {selectedOrganization}
                            <SlArrowDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => setSelectedOrganization('Branch 1')}>Branch 1</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSelectedOrganization('Branch 2')}>Branch 2</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSelectedOrganization('Branch 3')}>Branch 3</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <div className="flex items-center border px-3 py-2 rounded-lg text-black-700 text-sm">
                    <span>From: {selectedDate}</span>
                    <FaRegCalendarAlt className="ml-2 text-gray-500" />
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" aria-label="Select Product">
                            {selectedProduct}
                            <SlArrowDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => setSelectedProduct('Option 1')}>Option 1</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSelectedProduct('Option 2')}>Option 2</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSelectedProduct('Option 3')}>Option 3</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" aria-label="Select Status">
                            {selectedStatus}
                            <SlArrowDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => setSelectedStatus('Option 1')}>Option 1</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSelectedStatus('Option 2')}>Option 2</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSelectedStatus('Option 3')}>Option 3</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" aria-label="Select Project">
                            {selectedProject}
                            <SlArrowDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => setSelectedProject('Option 1')}>Option 1</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSelectedProject('Option 2')}>Option 2</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSelectedProject('Option 3')}>Option 3</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" aria-label="Select Home MC">
                            {selectedHomeMC}
                            <SlArrowDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => setSelectedHomeMC('Option 1')}>Option 1</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSelectedHomeMC('Option 2')}>Option 2</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSelectedHomeMC('Option 3')}>Option 3</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" aria-label="Select Home LC">
                            {selectedHomeLC}
                            <SlArrowDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => setSelectedHomeLC('Option 1')}>Option 1</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSelectedHomeLC('Option 2')}>Option 2</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSelectedHomeLC('Option 3')}>Option 3</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" aria-label="Select Duration">
                            {selectedDuration}
                            <SlArrowDown />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => setSelectedDuration('Option 1')}>Option 1</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSelectedDuration('Option 2')}>Option 2</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setSelectedDuration('Option 3')}>Option 3</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default FilterArea;
