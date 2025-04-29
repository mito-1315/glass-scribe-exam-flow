
import { useState } from "react";
import GlassCard from "@/components/GlassCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

const Settings = () => {
  const [studentsPerBench, setStudentsPerBench] = useState(3);
  const [enableOverflow, setEnableOverflow] = useState(false);
  const [enableClashDetection, setEnableClashDetection] = useState(true);
  const [autoAssignInvigilators, setAutoAssignInvigilators] = useState(true);
  
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="text-muted-foreground">Configure your exam management system</p>
        </div>
        <Button className="flex items-center gap-2">
          Save Settings
        </Button>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="mb-6">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="allocation">Allocation</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="appearance">Appearance</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-6">
          <GlassCard>
            <h2 className="text-lg font-medium mb-4">Basic Settings</h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="institution-name" className="text-sm">Institution Name</label>
                  <Input id="institution-name" placeholder="Enter institution name" defaultValue="University of Technology" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="academic-term" className="text-sm">Academic Term</label>
                  <Input id="academic-term" placeholder="Enter academic term" defaultValue="Summer 2025" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="admin-email" className="text-sm">Admin Email</label>
                  <Input id="admin-email" placeholder="Enter admin email" defaultValue="admin@university.edu" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="timezone" className="text-sm">Timezone</label>
                  <Select defaultValue="utc-5">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="utc-8">UTC-08:00 (Pacific)</SelectItem>
                      <SelectItem value="utc-7">UTC-07:00 (Mountain)</SelectItem>
                      <SelectItem value="utc-6">UTC-06:00 (Central)</SelectItem>
                      <SelectItem value="utc-5">UTC-05:00 (Eastern)</SelectItem>
                      <SelectItem value="utc-0">UTC+00:00 (London)</SelectItem>
                      <SelectItem value="utc+1">UTC+01:00 (Central Europe)</SelectItem>
                      <SelectItem value="utc+5.5">UTC+05:30 (India)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-sm">Enable Email Notifications</label>
                    <p className="text-xs text-muted-foreground">
                      Send email notifications for important updates
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <label className="text-sm">Enable Data Backup</label>
                    <p className="text-xs text-muted-foreground">
                      Automatically backup system data daily
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="text-lg font-medium mb-4">System Information</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-sm text-muted-foreground">Version</span>
                <span>1.0.0</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-sm text-muted-foreground">Last Updated</span>
                <span>April 29, 2025</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-white/5">
                <span className="text-sm text-muted-foreground">License</span>
                <span>Enterprise</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm text-muted-foreground">Storage Used</span>
                <span>125 MB / 1 GB</span>
              </div>
            </div>
          </GlassCard>
        </TabsContent>

        <TabsContent value="allocation" className="space-y-6">
          <GlassCard>
            <h2 className="text-lg font-medium mb-4">Seating Configuration</h2>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <label className="text-sm">Students Per Bench</label>
                    <span className="text-sm text-muted-foreground">{studentsPerBench}</span>
                  </div>
                  <Slider 
                    defaultValue={[3]} 
                    max={4} 
                    min={1} 
                    step={1} 
                    onValueChange={(values) => setStudentsPerBench(values[0])}
                  />
                  <p className="text-xs text-muted-foreground">Set the maximum number of students allowed per bench</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-0.5">
                    <label className="text-sm">Enable Overflow Allocation</label>
                    <p className="text-xs text-muted-foreground">
                      Allow overflow to other rooms when primary room is full
                    </p>
                  </div>
                  <Switch 
                    checked={enableOverflow} 
                    onCheckedChange={setEnableOverflow} 
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-0.5">
                    <label className="text-sm">Enable Subject Clash Detection</label>
                    <p className="text-xs text-muted-foreground">
                      Flag students with multiple exams scheduled at same time
                    </p>
                  </div>
                  <Switch 
                    checked={enableClashDetection} 
                    onCheckedChange={setEnableClashDetection} 
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="space-y-0.5">
                    <label className="text-sm">Auto-assign Invigilators</label>
                    <p className="text-xs text-muted-foreground">
                      System will automatically assign invigilators to rooms
                    </p>
                  </div>
                  <Switch 
                    checked={autoAssignInvigilators} 
                    onCheckedChange={setAutoAssignInvigilators} 
                  />
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <h3 className="text-sm font-medium">Room Assignment Logic</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="primary-allocation" className="text-sm">Primary Allocation Method</label>
                    <Select defaultValue="subject">
                      <SelectTrigger id="primary-allocation">
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sequential">Sequential (by Roll Number)</SelectItem>
                        <SelectItem value="subject">By Subject</SelectItem>
                        <SelectItem value="random">Randomized</SelectItem>
                        <SelectItem value="balanced">Balanced Distribution</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="seat-pattern" className="text-sm">Seating Pattern</label>
                    <Select defaultValue="alternate">
                      <SelectTrigger id="seat-pattern">
                        <SelectValue placeholder="Select pattern" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sequential">Sequential</SelectItem>
                        <SelectItem value="alternate">Alternate Subjects</SelectItem>
                        <SelectItem value="zigzag">Zigzag</SelectItem>
                        <SelectItem value="cluster">Clustered by Subject</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="text-lg font-medium mb-4">Time Slot Configuration</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label htmlFor="morning-slot" className="text-sm">Morning Slot</label>
                  <Input id="morning-slot" defaultValue="09:00 AM" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="afternoon-slot" className="text-sm">Afternoon Slot</label>
                  <Input id="afternoon-slot" defaultValue="02:00 PM" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="evening-slot" className="text-sm">Evening Slot</label>
                  <Input id="evening-slot" defaultValue="06:00 PM" />
                </div>
              </div>
              <div className="pt-2">
                <p className="text-xs text-muted-foreground">
                  Define standard exam time slots for scheduling. These will be used as the default options when scheduling exams.
                </p>
              </div>
            </div>
          </GlassCard>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <GlassCard>
            <h2 className="text-lg font-medium mb-4">Email Notifications</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <label className="text-sm">Exam Schedule Notifications</label>
                  <p className="text-xs text-muted-foreground">
                    Send notifications when exam schedules are published
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <label className="text-sm">Room Assignment Updates</label>
                  <p className="text-xs text-muted-foreground">
                    Notify when room assignments are changed
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <label className="text-sm">Invigilation Duty Alerts</label>
                  <p className="text-xs text-muted-foreground">
                    Alert staff when assigned to invigilation duties
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <label className="text-sm">Student Seating Notifications</label>
                  <p className="text-xs text-muted-foreground">
                    Send students their seating assignments
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="text-lg font-medium mb-4">System Alerts</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <label className="text-sm">Subject Clash Alerts</label>
                  <p className="text-xs text-muted-foreground">
                    Alert when students have multiple exams at the same time
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <label className="text-sm">Room Capacity Warnings</label>
                  <p className="text-xs text-muted-foreground">
                    Alert when room is over or near capacity
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <label className="text-sm">Staff Conflict Notifications</label>
                  <p className="text-xs text-muted-foreground">
                    Alert when staff are assigned to multiple duties at once
                  </p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </GlassCard>
        </TabsContent>

        <TabsContent value="appearance" className="space-y-6">
          <GlassCard>
            <h2 className="text-lg font-medium mb-4">Interface Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <label className="text-sm">Enable Animations</label>
                  <p className="text-xs text-muted-foreground">
                    Show animations in the user interface
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <label className="text-sm">Enable Tooltips</label>
                  <p className="text-xs text-muted-foreground">
                    Show helpful tooltips throughout the interface
                  </p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <label className="text-sm">Compact Mode</label>
                  <p className="text-xs text-muted-foreground">
                    Use more compact layout to fit more content
                  </p>
                </div>
                <Switch />
              </div>
              
              <div className="space-y-2 pt-4">
                <label htmlFor="accent-color" className="text-sm">Accent Color</label>
                <div className="flex gap-3">
                  {['blue', 'purple', 'green', 'amber', 'rose'].map((color) => (
                    <div
                      key={color}
                      className={`w-8 h-8 rounded-full cursor-pointer ${
                        color === 'blue' ? 'bg-blue-500 ring-2 ring-offset-2 ring-blue-500' : 
                        color === 'purple' ? 'bg-purple-500' : 
                        color === 'green' ? 'bg-green-500' : 
                        color === 'amber' ? 'bg-amber-500' : 
                        'bg-rose-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h2 className="text-lg font-medium mb-4">Accessibility Settings</h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm">Font Size</label>
                  <span className="text-sm text-muted-foreground">Normal</span>
                </div>
                <Slider defaultValue={[50]} max={100} step={25} />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Small</span>
                  <span>Normal</span>
                  <span>Large</span>
                  <span>X-Large</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4">
                <div className="space-y-0.5">
                  <label className="text-sm">High Contrast Mode</label>
                  <p className="text-xs text-muted-foreground">
                    Enhance visual contrast for better readability
                  </p>
                </div>
                <Switch />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <label className="text-sm">Reduce Motion</label>
                  <p className="text-xs text-muted-foreground">
                    Minimize animations and transitions
                  </p>
                </div>
                <Switch />
              </div>
              
              <div className="flex items-center justify-between pt-2">
                <div className="space-y-0.5">
                  <label className="text-sm">Screen Reader Optimized</label>
                  <p className="text-xs text-muted-foreground">
                    Enhance content for screen readers
                  </p>
                </div>
                <Switch />
              </div>
            </div>
          </GlassCard>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;
